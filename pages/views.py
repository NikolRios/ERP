import logging
from copy import deepcopy

from django.conf import settings
from django.core.mail import EmailMessage
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_POST

from .data import NAV_ITEMS, PAGE_CONTENT, SECTION_TEMPLATES
from .forms import ContactMessageForm


logger = logging.getLogger(__name__)


def home(request):
    return render(
        request,
        "pages/index.html",
        {
            "nav_items": NAV_ITEMS,
            "sections": PAGE_CONTENT,
            "active_slug": "home",
        },
    )


@require_POST
def contact_message(request):
    form = ContactMessageForm(request.POST)
    if not form.is_valid():
        return JsonResponse(
            {"ok": False, "message": "Revisa los datos e intenta de nuevo."},
            status=400,
        )

    if not settings.DEFAULT_FROM_EMAIL or not settings.CONTACT_TEAM_EMAIL:
        return JsonResponse(
            {"ok": False, "message": "El envio de correos no esta configurado."},
            status=503,
        )

    name = form.cleaned_data["name"]
    email = form.cleaned_data["email"]
    company = form.cleaned_data["company"]
    plan = form.cleaned_data["plan"]
    message = form.cleaned_data["message"]

    email_body = "\n".join(
        [
            "Nueva solicitud desde el sitio de Majjun ERP",
            "",
            f"Nombre: {name}",
            f"Correo: {email}",
            f"Empresa: {company or 'No indicada'}",
            f"Plan de interes: {plan or 'No indicado'}",
            "",
            "Mensaje:",
            message,
        ]
    )

    try:
        EmailMessage(
            subject="Quiero informacion sobre el ERP Majjun",
            body=email_body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[settings.CONTACT_TEAM_EMAIL],
            reply_to=[email],
        ).send(fail_silently=False)
    except Exception:
        logger.exception("Could not send contact form email")
        return JsonResponse(
            {
                "ok": False,
                "message": "No fue posible enviar el mensaje. Intenta de nuevo.",
            },
            status=502,
        )

    return JsonResponse(
        {"ok": True, "message": f"Gracias, {name}. Recibimos tu solicitud."}
    )


def section_page(request, slug, nav_slug=None):
    active_slug = nav_slug or slug
    active_item = next(item for item in NAV_ITEMS if item["slug"] == active_slug)
    section = PAGE_CONTENT[slug]

    if slug == "finance_accounting":
        section = deepcopy(section)
        for block in section["sections"]:
            _, separator, display_title = block["title"].partition(". ")
            block["display_title"] = display_title if separator else block["title"]

        report_section = section["sections"][-1]
        report_section["report_outputs"] = []
        for point in report_section["points"][:3]:
            title, separator, description = point.partition(": ")
            report_section["report_outputs"].append(
                {
                    "title": title,
                    "description": description if separator else point,
                }
            )
        report_section["additional_points"] = report_section["points"][3:]

    return render(
        request,
        "pages/section_page.html",
        {
            "nav_items": NAV_ITEMS,
            "section": section,
            "section_template": SECTION_TEMPLATES[slug],
            "active_slug": active_slug,
            "active_label": active_item["label"],
        },
    )
