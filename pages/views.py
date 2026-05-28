from django.shortcuts import render

from .data import NAV_ITEMS, PAGE_CONTENT, SECTION_TEMPLATES


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


def section_page(request, slug):
    active_item = next(item for item in NAV_ITEMS if item["slug"] == slug)
    return render(
        request,
        "pages/section_page.html",
        {
            "nav_items": NAV_ITEMS,
            "section": PAGE_CONTENT[slug],
            "section_template": SECTION_TEMPLATES[slug],
            "active_slug": slug,
            "active_label": active_item["label"],
        },
    )
