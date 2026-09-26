import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How Zero One handles information submitted through its project enquiry form.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy notice">
      <p>This notice explains how Zero One handles information you share through this website. It applies to the project enquiry form and contact links on this site.</p>
      <h2>Information you provide</h2>
      <p>The enquiry form asks for your name, business name, email address, phone number and the type of help you need. You can also choose to include project details. Please do not include sensitive personal information in the message.</p>
      <h2>How we use it</h2>
      <p>We use these details to review and reply to your enquiry, discuss a possible project and protect the form from spam. Form submissions are sent to Zero One by email using Resend, our email delivery service. The website does not currently save enquiries in a separate customer database or use them for marketing newsletters.</p>
      <h2>Storage and service providers</h2>
      <p>Submitted details may be held in the email service and inbox used to receive your enquiry. We keep enquiry correspondence for as long as it is useful to respond and follow up, and handle deletion in those services as appropriate. The hosting provider also processes technical information needed to operate and protect the website.</p>
      <h2>Your choices</h2>
      <p>You can choose not to use the form and contact us directly. To ask about a copy, correction or deletion of information you sent, email <a href="mailto:anmolkewat369@gmail.com">anmolkewat369@gmail.com</a> and describe your request.</p>
      <h2>External links</h2>
      <p>WhatsApp and other external services have their own privacy practices. When you follow one of those links, the provider’s terms and privacy notice apply to your use of that service.</p>
      <h2>Contact</h2>
      <p>Questions about this notice can be sent to <a href="mailto:anmolkewat369@gmail.com">anmolkewat369@gmail.com</a>.</p>
    </LegalPage>
  );
}
