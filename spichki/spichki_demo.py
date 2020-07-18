import random
print('СПИЧКИ')
print('За ход можно взять от 1 до 9 спичек.')
print('Выигрывает тот, кто последний возьмет спичку.')
print('Максимальное количество спичек - 100.\n')

counter = 0
step = 1
seq_1 = [1,3,5,7,9]
seq_2 = [2,4,6,8]

while True:
    if counter < 100:
        player = 1
        if step % 2 == 1:
            num_u = random.choice(seq_1)
        else:
            num_u = random.choice(seq_2)
        counter += num_u
        print(f'Компьтер 1 взял {num_u} спичек.')
        print(f'Сумма спичек: {counter}.')
    else: break
    if counter < 100:
        player = 2
        if step % 2 == 1:
            num_c = random.choice(seq_2)
        else:
            num_c = random.choice(seq_1)
        counter += num_c
        print(f'Компьтер 2 взял {num_c} спичек.')
        print(f'Сумма спичек: {counter}.')
    else: break
    step += 1

print(f'Игра окончена! Выиграл компьютер {player}!')