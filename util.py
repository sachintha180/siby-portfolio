MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"]
SUFFIXES = ['th', 'st', 'nd', 'rd', 'th']


def get_summary(text):
    return text[:72] + "..."


def get_full_date(short_date):
    split_date = short_date.split("-")
    day, month, year = int(split_date[0]), int(
        split_date[1]), int(split_date[2])
    day_suffix = SUFFIXES[0 if day//10 ==
                          1 else min(day % 10, len(SUFFIXES)-1)]
    return f"{day}{day_suffix} {MONTH_NAMES[month-1]} {year}"
