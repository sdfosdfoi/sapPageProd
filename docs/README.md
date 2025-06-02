# SaaS Processing Center

**Платформа приёма и роутинга платежей (SaaS процессинговый центр):**

## Возможности

- Приём, роутинг и авторизация платежей: Visa, Mastercard, МИР, СБП, USDT (ERC20/TRC20)
- BIN-анализ, антифрод фильтры (гео, IP, время)
- Smart-routing, fallback между банками, настраиваемые правила маршрутизации
- Безопасность: PCI DSS 4.0, P2PE, токенизация (PAN → Token), WAF, аудит, логирование
- Массовые и автоматические выплаты: карты, крипта, СБП
- REST API с JWT / OAuth2, webhooks (success/failed/refund)
- Личный кабинет администратора и мерчанта с отчётностью, аналитикой, выгрузками
- Монетизация — гибкие комиссии, статистика по мерчантам
- Работа со спорами: OCR чеков, AI-прогноз выплат, интерфейс модератора
- Оповещения (Email/Telegram/SMS) о событиях

## Структура репозитория

- `/frontend` — интерфейс на React (админ, мерчант, docs, отчёты)
- `/backend` — ядро FastAPI (разделы: core, routing, payouts, security …)
- `/docs` — документация (это описание, Swagger/openapi.yaml)
- `/design` — цвета, UI-референсы, палитра

## Быстрый старт

### Backend (FastAPI):

```sh
cd backend
venv\Scripts\activate
uvicorn main:app --reload
# API: http://localhost:8000/ping
# Swagger: http://localhost:8000/docs
```

### Frontend (React):

```sh
cd frontend
npm start
# Откроется: http://localhost:3000
```

## Тестовые страницы

- Главная: `/`
- Кабинет администратора: `/admin`
- Кабинет мерчанта: `/merchant`
- API-документация: `/docs`
- Интеграции: `/integration`
- Отчёты/выгрузки: `/reports`

## Архитектура backend

Модули FastAPI:
- `core.py` — BIN-анализ, антифрод, операции
- `routing.py` — смарт-маршрутизация транзакций
- `security.py` — WAF, PCI DSS, P2PE токенизация
- `integration.py` — webhooks и шлюзы
- `payouts.py` — автоматизированные выплаты
- `monetization.py` — расчёт комиссий
- `merchant.py` — API, кабинет, генерация ключей
- `disputes.py` — споры, OCR, AI-обработка
- `notifications.py` — уведомления (email/tg/sms)
- `logging.py` — журнал событий

Открытые маршруты можно посмотреть через Swagger UI или openapi.yaml.

## CI/CD и мониторинг

Рекомендуется: Docker, GitHub Actions, Grafana/Prometheus, ELK

## Контакты/развитие

White-label и кастомизация для B2B. Интеграция с KYC/AML сервисами: Sumsub/iDenfy.

Все вопросы — в issues либо напрямую автору.

---

# SaaS Processing Center

Платформа SaaS-процессинговый центр / Центр приема и роутинга платежей.

## Структура проекта

- `/frontend` — пользовательский интерфейс (React)
- `/backend` — API и логика (FastAPI)
- `/docs` — документация, инструкции
- `/design` — референсы по дизайну и фирменный стиль

## Локальный запуск

### Backend:
```sh
cd backend
venv\Scripts\activate
uvicorn main:app --reload
# Проверка: http://127.0.0.1:8000/ping
```

### Frontend:
```sh
cd frontend
npm start
# Откроется: http://localhost:3000
```

## Возможности (MVP)

- Интеграции: Visa/Mastercard/МИР/SBP/Крипто (заглушки)
- Smart-routing платежей, антифрод-фильтры, сквозное шифрование (P2PE)
- Личный кабинет для админа и мерчанта
- Swagger/OpenAPI + webhooks

---

### Инструкции по развертыванию и CI/CD смотрите в отдельных файлах.

