Библиотека для прогона тестовых диалогов с навыком для Алисы.

## Как это работает:
- Вы описываете диалоге в yml файле
- Запускаете `yandex-dialogs-tester`, указывая путь к yml и адрес навыка
- Прогоняются все диалоги, выдается результат

## Использование
``` bash
npm install -g yandex-dialogs-tester
yandex-dialogs-tester --webhook-url http://localhost:3000 --scenarios-file /path/to/scenarios.yml
```

## Возможности:
- Использование в виде cli-утилиты
- Указание навыка по Webhook URL
- Указание файла сценариев

## Синтаксис scenarios.yml
- [Пример scanarios.yml с комментариями](/scenarios.sample.yml)
- [Пример боевого scanarios.yml](https://github.com/popstas/yandex-dialogs-whatis/blob/master/static/scenarios.yml)

## Что нужно знать о проекте на этапе альфы:
- Самый полный scenarios.yml [лежит в yandex-dialogs-whatis](https://github.com/popstas/yandex-dialogs-whatis/blob/master/static/scenarios.yml), т.к. сначала писались тесты там, а потом тестилка
- Сам проект практичски без изменений скопипащен из [yandex-dialogs-whatis/tests](https://github.com/popstas/yandex-dialogs-whatis/tree/master/tests), там он встроен в проект и умеет запускаться в Travis CI
- В yandex-dialogs-whatis тестилка была скопипащена из [yandex-dialogs-client/store/index.js](https://github.com/popstas/yandex-dialogs-client/blob/3872ea133210c11d710b36506f81477fe6ea11a9/store/index.js#L333), изначально тестилка была написана там

## Планы:
- Указание URL сценариев
- Использование в виде библиотеки для включения тестилки в проект навыка на js
- Запуск навыка перед запуском тестов
- Автоматический запуск навыка локально
- Использование Webhook URL навыка
- Группы сценариев
- Многофайловые сценарии
- Проверка кнопок
- `--timeout`

## Скачать и протестировать навык yandex-dialogs-whatis

1. Установка и запуск навыка:
``` bash
git clone https://github.com/popstas/yandex-dialogs-whatis.git /tmp/yandex-dialogs-whatis && \
cd /tmp/yandex-dialogs-whatis && \
npm install && \
cp src/config.sample.js src/config.js && \
npm start
```

2. Установка и запуск тестилки (в другом терминале):
``` bash
npm install -g yandex-dialogs-tester
yandex-dialogs-tester --scenarios-file /tmp/yandex-dialogs-whatis/static/scenarios.yml --webhook-url http://localhost:3002
```