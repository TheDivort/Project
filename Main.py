class MovieTheater:
    def __init__(self):
        self.theaters = []
    
    def add_theater(self, theater):
        self.theaters.append(theater)
    
    def find_nearest_showtime(self, movie_name):
        closest_showtime = None
        closest_theater = None
        for theater in self.theaters:
            showtime = theater.find_showtime(movie_name)
            if showtime:
                if not closest_showtime or showtime < closest_showtime:
                    closest_showtime = showtime
                    closest_theater = theater
        return closest_theater, closest_showtime
    
    def print_seat_plan(self, theater_name, showtime):
        for theater in self.theaters:
            if theater.name == theater_name:
                theater.print_seat_plan(showtime)
                break


class Theater:
    def __init__(self, name):
        self.name = name
        self.rooms = []
    
    def add_room(self, room):
        self.rooms.append(room)
    
    def find_showtime(self, movie_name):
        for room in self.rooms:
            showtime = room.find_showtime(movie_name)
            if showtime:
                return showtime
        return None
    
    def print_seat_plan(self, showtime):
        for room in self.rooms:
            if room.showtime == showtime:
                room.print_seat_plan()
                break

class Room:
    def __init__(self, name, seat_config):
        self.name = name
        self.seat_config = seat_config
        self.showtime = None
        self.seats = []
    
    def set_showtime(self, showtime):
        self.showtime = showtime
    
    def add_seat(self, seat):
        self.seats.append(seat)
    
    def find_showtime(self, movie_name):
        if self.showtime and self.showtime.movie_name == movie_name and self.showtime.has_available_seats():
            return self.showtime
        return None
    
    def print_seat_plan(self):
        for seat_row in self.seat_config:
            row_str = ""
            for seat in seat_row:
                if seat.is_available():
                    row_str += "O "
                else:
                    row_str += "X "
            print(row_str)
    
    def get_available_seats(self, num_seats):
        available_seats = []
        for seat in self.seats:
            if seat.is_available():
                available_seats.append(seat)
                if len(available_seats) == num_seats:
                    return available_seats
        return None

class Seat:
    def __init__(self, row, number):
        self.row = row
        self.number = number
        self.is_available = True
    
    def is_available(self):
        return self.is_available
    
    def reserve(self):
        self.is_available = False

class Showtime:
    def __init__(self, movie_name, duration, showtime):
        self.movie_name = movie_name
        self.duration = duration
        self.showtime = showtime
        self.available_seats = []
    
    def has_available_seats(self):
        return len(self.available_seats) > 0
    
    def set_available_seats(self, seats):
        self.available_seats = seats
    

# Пример использования

# Создаем кинотеатр
theater = Theater("Кинотеатр 'Пять звезд'")
room = Room("Зал 1", [
    [Seat(1, 1), Seat(1, 2), Seat(1, 3)],
    [Seat(2, 1), Seat(2, 2), Seat(2, 3)],
    [Seat(3, 1), Seat(3, 2), Seat(3, 3)]
])
theater.add_room(room)
movie_theater = MovieTheater()
movie_theater.add_theater(theater)

# Добавляем сеанс
showtime = Showtime("Фильм 1", 120, "2021-07-31 18:00")
available_seats = room.get_available_seats(3)
showtime.set_available_seats(available_seats)
room.set_showtime(showtime)

# Продажа билетов
for seat in available_seats:
    seat.reserve()

# Печать плана зала
theater.print_seat_plan("Зал 1", "2021-07-31 18:00")

# Поиск ближайшего сеанса
theater, showtime = movie_theater.find_nearest_showtime("Фильм 1")
print("Ближайший сеанс:")
print("Кинотеатр:", theater.name)
print("Зал:", showtime.room.name)
print("Время:", showtime.showtime)
print("Длительность:", showtime.duration)
