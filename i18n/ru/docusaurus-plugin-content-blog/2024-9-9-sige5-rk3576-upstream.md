---
slug: sige5-sbc-upstream
title: sige5-sbc-upstream
authors: [ArmSoM, keven]
tags: [sige5, Makes]
---

### Прогресс Поддержки Основного Ядра для RK3576 SoC на ArmSoM-Sige5

Мы рады сообщить, что поддержка основного ядра для платы разработки ArmSoM-Sige5 на базе RK3576 SoC стабильно продвигается благодаря усилиям Collabora. RK3576 SoC является частью семейства Rockchip и имеет сходство с широко известным RK3588, многие аппаратные блоки которого были повторно использованы, что облегчает процесс добавления поддержки в основное ядро.

![ArmSoM-Sige5](/img/sige/sige5.png)

### Обзор Поддержки Основного Ядра для RK3576

Был достигнут значительный прогресс в продвижении поддержки основного ядра для RK3576 SoC. Ниже приведен текущий статус поддержки различных аппаратных модулей:

#### 1. Управление Питанием и Контроль Тактовых Частот

- **PMIC (rk806)**: Поддержка была включена в Linux 6.12-rc1.
- **Контроль Тактов и Сбросов (CRU)**: Поддержка в основном ядре была добавлена, включая обновленное привязки к устройствам.
- **Энергетический Домейн (pmdomain)**: Несколько патчей, включая базовую поддержку, были включены.

#### 2. Хранение и Интерфейсы Периферийных Устройств

- **eMMC**: Поддерживается в Linux 6.12-rc1.
- **SD Карта и SDIO**: Оба интерфейса теперь поддерживаются в основном ядре.
- **SATA и UFS**: Патчи для UFS были отправлены, а поддержка SATA была изначально реализована в Linux 6.1-rc1.

#### 3. Сети и Связь

- **Ethernet**: Поддержка была добавлена в Linux 6.12-rc1.
- **WLAN и Bluetooth (rtl8852bs)**: Полная поддержка основного ядра пока не доступна, но существующие драйверы могут быть адаптированы.

#### 4. Дисплей и Мультимедиа

- **Контроллер Дисплея (VOP)**: Патчи были отправлены с поддержкой реализации HDMI и DisplayPort.
- **GPU (Mali G-52 MC3)**: Поддержка добавлена в Linux 6.12-rc1.
- **Кодирование и Декодирование Медиа**: Все еще находится в стадии разработки, и пока нет четких планов по поддержке в основном ядре.

#### 5. Поддержка Других Периферийных Устройств

- **UART и SPI**: Эти периферийные устройства уже имеют драйверы, включенные в основное ядро.
- **I2C и GPIO**: Обновленные привязки к устройствам были включены, а связанные патчи для GPIO и Pinmux были отправлены.

### Резюме

Поддержка RK3576 SoC в сообществе с открытым исходным кодом продвигается успешно, многие ключевые модули уже получили начальную поддержку. Однако, для реализации таких передовых функций, как аудио через HDMI, DSI и NPU, потребуется дальнейшая разработка. Продукт ArmSoM-Sige5, как пример использования RK3576 SoC, выиграет от этих непрерывных улучшений, и со временем мы можем ожидать более полной поддержки основного ядра.

#### Участвуйте в Разработке

Если вам интересно содействовать поддержке основного ядра для RK3576 SoC, мы призываем вас присоединиться к сообществу. Будь то тестирование существующих патчей, разработка новых драйверов или внесение кода в привязки к устройствам, ваше участие станет важным вкладом в развитие всего сообщества.

#### Взгляд в Будущее

По мере того как поддержка основного ядра для RK3576 SoC продолжает улучшаться, опыт разработки на ArmSoM-Sige5 станет более плавным и надежным. Мы уверены, что это дополнительно будет способствовать развитию встроенных приложений на базе RK3576, позволяя большему количеству разработчиков использовать эту мощную аппаратную платформу для инноваций.

Для получения дополнительной информации или участия в разработке, посетите следующие ссылки:
- [Collabora](https://gitlab.collabora.com/hardware-enablement/rockchip-3588/notes-for-rockchip-3576/-/blob/main/mainline-status.md?ref_type=heads) - Collabora внесла значительный вклад
- [Информация о Плате ArmSoM-Sige5](https://docs.armsom.org/armsom-sige5)
- [Код Основного Ядра](https://github.com/armbian/linux-rockchip/tree/rk3576-6.1-dev-2024_04_19)
- [Поддержка U-Boot](https://github.com/ArmSoM/u-boot/tree/rk3576)
- [rkbin Firmware](https://github.com/armbian/rkbin/commit/4f56cdc8310582bd737b54bdbd7e2d8ee160896f)