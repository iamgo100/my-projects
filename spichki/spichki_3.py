print('СПИЧКИ')
print('За ход можно взять от 1 до 9 спичек.')
print('Выигрывает тот, кто последний возьмет спичку.')
print('Максимальное количество спичек - 100.\n')

player = int(input('Выберите игрока: 1 или 2\n'))

counter = 0

if player == 1:
    print('Первый игрок - вы.')
    print('Второй игрок - компьютер.')
    while True:
        if counter < 100:
            player = 1
            num_u = int(input('Введите количество спичек: '))
            counter += num_u
            print(f'Сумма спичек: {counter}.')
        else: break
        if counter < 100:
            player = 2
            num_c = 10 - (counter % 10)
            counter += num_c
            print(f'Компьтер взял {num_c} спичек.\nСумма спичек: {counter}.')
        else: break
elif player == 2:
    print('Первый игрок - компьютер.')
    print('Второй игрок - вы.')
    while True:
        if counter < 100:
            player = 1
            if (counter % 10) != 0:
                num_c = 10 - (counter % 10)
            else:
                num_c = 2
            counter += num_c
            print(f'Компьтер взял {num_c} спичек.\nСумма спичек: {counter}.')
        else: break
        if counter < 100:
            player = 2
            num_u = int(input('Введите количество спичек: '))
            counter += num_u
            print(f'Сумма спичек: {counter}.')
        else: break

print(f'Игра окончена! Выиграл игрок {player}!')