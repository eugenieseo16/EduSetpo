interface IUser {
  userId: number;
  userNickname: string;
  userName: string;
  themeIndex: number;
}

export interface LocalTime {
  hour: string;
  minute: string;
  nano: number;
  second: string;
}

export interface LocalDateTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
}

export interface LocalDate {
  year: number;
  month: number;
  day: number;
}
