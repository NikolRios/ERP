from copy import deepcopy

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
