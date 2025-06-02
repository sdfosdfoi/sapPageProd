import { render, screen } from '@testing-library/react';
import App from '../App';

// Smoke test: renders root routes and key text/buttons
test('renders main dashboard and navigation', () => {
  render(<App />);
  // Главная страница
  expect(screen.getByText(/SaaS Processing Center/i)).toBeInTheDocument();
  // Меню header и side
  expect(screen.getByText(/Админка/i)).toBeInTheDocument();
  expect(screen.getByText(/Мерчант/i)).toBeInTheDocument();
  // Переход на дашборд администратора
  expect(screen.getAllByText(/Кабинет администратора|Кабинет мерчанта/i).length).toBeGreaterThan(0);
  // Главные кнопки
  expect(screen.getByRole('button', {name: /Экспорт CSV/i})).toBeInTheDocument();
  expect(screen.getByRole('button', {name: /Сгенерировать новый API-ключ/i})).toBeInTheDocument();
});

