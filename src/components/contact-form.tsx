import Script from "next/script";

export function ContactForm() {
  return (
    <div className="min-w-0">
      <iframe
        src="https://forms.yandex.ru/u/6af70149c45c074729a2fa46?iframe=1"
        name="ya-form-6af70149c45c074729a2fa46"
        title="Заявка на консультацию — Яндекс Форма"
        width="650"
        height="900"
        frameBorder="0"
        className="mx-auto block w-full max-w-[650px] border-0"
      />
      <Script src="https://forms.yandex.ru/_static/embed.js" strategy="afterInteractive" />
      <p className="mt-4 text-center text-xs leading-5 text-slate-400">
        Если форма не загрузилась,{" "}
        <a
          href="https://forms.yandex.ru/u/6af70149c45c074729a2fa46"
          target="_blank"
          rel="noopener noreferrer"
          className="text-wine-soft underline underline-offset-4"
        >
          откройте её в новой вкладке
        </a>.
      </p>
    </div>
  );
}
