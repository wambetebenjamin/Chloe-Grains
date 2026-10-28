import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import SavedManager from "@/components/SavedManager";
import { t } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Saved",
  description:
    "Your saved recipes and saved food profiles from Chloe Grains, kept privately in your browser.",
  alternates: { canonical: "/saved" },
};

export default async function SavedPage() {
  const locale = await getLocale();

  return (
    <>
      <PageTitle
        title={t(locale, "nav.saved")}
        text="A quiet shelf for the recipes and food profiles you want to return to. Private to your device."
        crumbs={[{ label: t(locale, "nav.saved") }]}
      />

      <section className="section">
        <SavedManager />
      </section>
    </>
  );
}
