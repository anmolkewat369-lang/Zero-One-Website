import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Website terms",
  description: "Basic terms for using the Zero One website and discussing a project with the team.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Website terms">
      <p>By using this website, you agree to use it lawfully and not to interfere with its operation, security or other visitors’ use.</p>
      <h2>Website information</h2>
      <p>This site introduces Zero One and its web design and development services. We take care to keep information useful and current, but the site is provided for general information and may change over time.</p>
      <h2>Project work</h2>
      <p>Sending an enquiry does not create a client relationship or commit either side to a project. Any project’s scope, fees, schedule, payment terms, ownership and other deliverables will be agreed in writing before work begins.</p>
      <h2>Availability and outcomes</h2>
      <p>We aim to keep the site available, but cannot promise uninterrupted access. Examples and service descriptions are informational; project outcomes depend on the agreed work and factors outside the website itself.</p>
      <h2>External services</h2>
      <p>This site may link to services such as WhatsApp. Those services operate under their own terms. Use them at your discretion.</p>
      <h2>Contact</h2>
      <p>For questions about these terms, email <a href="mailto:anmolkewat369@gmail.com">anmolkewat369@gmail.com</a>.</p>
    </LegalPage>
  );
}
