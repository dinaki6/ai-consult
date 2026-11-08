"use client";

import { useState } from "react";
import { Check } from "@/components/icons";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex min-h-[440px] flex-col items-center justify-center px-2 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-wine/30 bg-wine/10 text-wine-soft shadow-[0_0_35px_-10px_rgba(200,131,139,0.7)]">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-6 text-xl font-semibold text-white">Заявка отправлена</h3>
        <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
          Это демо-режим: данные остались в браузере. Подключите API или CRM, чтобы принимать заявки по-настоящему.
        </p>
        <button type="button" onClick={() => setSent(false)} className="btn-ghost mt-7 !py-2.5 text-xs">
          Заполнить ещё раз
        </button>
      </div>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-medium text-slate-400">
            Имя
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Как к вам обращаться" className="field" />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-xs font-medium text-slate-400">
            Компания
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" placeholder="Название или сфера" className="field" />
        </div>
      </div>

      <div>
        <label htmlFor="contact" className="mb-2 block text-xs font-medium text-slate-400">
          Email
        </label>
        <input id="contact" name="contact" type="email" required autoComplete="email" placeholder="Ваш email" className="field" />
      </div>

      <div>
        <label htmlFor="task" className="mb-2 block text-xs font-medium text-slate-400">
          Что хотите автоматизировать?
        </label>
        <textarea
          id="task"
          name="task"
          rows={4}
          placeholder="Опишите процесс: обработка заявок, поддержка, отчётность…"
          className="field resize-none"
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Отправить заявку
      </button>

      <p className="pt-1 text-center text-[11px] leading-5 text-slate-500">
        Демо-форма: данные никуда не отправляются. Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
      </p>
    </form>
  );
}
