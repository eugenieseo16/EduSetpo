export const apiBaseUrl = 'https://www.edusetpo.com/api';

export const tutorApiUrls = {
  tutorApiUrl: `${apiBaseUrl}/tutor`,
  tutorEmailApiUrl: `${apiBaseUrl}/tutor/email`,
  tutorLoginApiUrl: `${apiBaseUrl}/tutor/login`,
  tutorNicknameApiUrl: `${apiBaseUrl}/tutor/nickname`,
  tutorNicknameUpdateApiUrl: `${apiBaseUrl}/tutor/nickname/update`,
  tutorPasswordUpdateApiUrl: `${apiBaseUrl}/tutor/password/update`,
  tutorProfileUrlApiUrl: `${apiBaseUrl}/tutor/profile-url`,
  tutorSignupApiUrl: `${apiBaseUrl}/tutor/signup`,
  tutorThemeApiUrl: `${apiBaseUrl}/tutor/theme`,
  tutorWithdrawApiUrl: `${apiBaseUrl}/tutor/withdraw`,
};

export const parentApiUrls = {
  parentApiUrl: `${apiBaseUrl}/parent`,
  parentEmailApiUrl: `${apiBaseUrl}/parent/email`,
  parentLoginApiUrl: `${apiBaseUrl}/parent/login`,
  parentPasswordUpdateApiUrl: `${apiBaseUrl}/parent/password/update`,
  parentSignupApiUrl: `${apiBaseUrl}/parent/signup`,
  parentWithdrawApiUrl: `${apiBaseUrl}/parent/withdraw`,
};

export const childrenApiUrls = {
  ChildrenApiUrl: `${apiBaseUrl}/parent/children`,
};

export const gradeApiUrls = {
  gradeApiUrl: `${apiBaseUrl}/grade`,
  gradeCategoryApiUrl: `${apiBaseUrl}/grade/category`,
};

export const homeworkApiUrls = {
  homeworkApiUrl: `${apiBaseUrl}/homework`,
  homeworkCompleteApiUrl: `${apiBaseUrl}/homework/complete`,
};

export const lessonApiUrls = {
  lessonApiUrl: `${apiBaseUrl}/lesson`,
  lessonDeactivateApiUrl: `${apiBaseUrl}/lesson/deactivate`,
};

export const lessonTagApiUrls = {
  tagByClassApiUrl: `${apiBaseUrl}/tag`,
  tagApiUrl: `${apiBaseUrl}/tutor/tag`,
};

export const salaryApiUrls = {
  salaryCreateApiUrl: `${apiBaseUrl}/salary/create`,
  salaryLessonApiUrl: `${apiBaseUrl}/salary/lesson`,
  salaryMyApiUrl: `${apiBaseUrl}/salary/my`,
  salaryToggleApiUrl: `${apiBaseUrl}/salary/toggle`,
};

export const scheduleApiUrls = {
  scheduleApiUrl: `${apiBaseUrl}/schedule`,
};

export const sessionApiUrls = {
  sessionApiUrl: `${apiBaseUrl}/session`,
  sessionDetailApiUrl: `${apiBaseUrl}/session/detail`,
  sessionListApiUrl: `${apiBaseUrl}/session/list`,
  sessionActualDateApiUrl: `${apiBaseUrl}/session/list/actual-date`,
};

export const studentApiUrls = {
  studentApiUrl: `${apiBaseUrl}/student`,
  studentCreateApiUrl: `${apiBaseUrl}/student/create`,
  studentListApiUrl: `${apiBaseUrl}/student/student-list`,
  studentToggleApiUrl: `${apiBaseUrl}/student/toggle`,

  studentLessonApiUrl: `${apiBaseUrl}/student-lesson`,
  studentLessonToggleApiUrl: `${apiBaseUrl}/student-lesson/toggle`,
};
