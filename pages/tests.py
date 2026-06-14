from django.core import mail
from django.test import TestCase, override_settings
from django.urls import reverse


@override_settings(
    EMAIL_BACKEND="django.core.mail.backends.locmem.EmailBackend",
    DEFAULT_FROM_EMAIL="sitio@example.com",
    CONTACT_TEAM_EMAIL="equipo@example.com",
)
class ContactMessageTests(TestCase):
    def test_sends_contact_message_to_team(self):
        response = self.client.post(
            reverse("contact_message"),
            {
                "name": "Ana",
                "email": "ana@example.com",
                "company": "Ejemplo",
                "plan": "Premium",
                "message": "Quiero una demostracion.",
            },
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].from_email, "sitio@example.com")
        self.assertEqual(mail.outbox[0].to, ["equipo@example.com"])
        self.assertEqual(mail.outbox[0].reply_to, ["ana@example.com"])

    def test_rejects_invalid_email(self):
        response = self.client.post(
            reverse("contact_message"),
            {"name": "Ana", "email": "correo-invalido", "message": "Hola"},
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(len(mail.outbox), 0)

    def test_rejects_oversized_message(self):
        response = self.client.post(
            reverse("contact_message"),
            {
                "name": "Ana",
                "email": "ana@example.com",
                "message": "x" * 5001,
            },
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(len(mail.outbox), 0)

    @override_settings(CONTACT_TEAM_EMAIL="")
    def test_reports_missing_email_configuration(self):
        response = self.client.post(
            reverse("contact_message"),
            {"name": "Ana", "email": "ana@example.com", "message": "Hola"},
        )

        self.assertEqual(response.status_code, 503)
        self.assertEqual(len(mail.outbox), 0)
