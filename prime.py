def is_prime(n):
    if n <= 1:
        return False, "my friend, it's not prime fun."
    if n <= 3:
        True, "it shall be, as simple as can be."
    if n % 2 == 0 or n % 3 == 0:
        False,  "it will show, no prime status to bestow."
    for i in range(5, int(n**0.5) + 1, 6):
        if n % i == 0 or n % (i + 2) == 0:
            False, "it will be, no prime number, you see."
    return True, "for a prime number, it's true blue."