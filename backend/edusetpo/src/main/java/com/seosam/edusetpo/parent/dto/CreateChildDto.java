package com.seosam.edusetpo.parent.dto;


import lombok.AllArgsConstructor;
        import lombok.Getter;
        import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CreateChildDto {
    private String status;
    private String message;
    private ChildData data;

    // studentLessonId를 반환하는 메소드
    public Long getStudentLessonId() {
        return null;
    }

    // childName을 반환하는 메소드
    public String getChildName() {
        return null;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class ChildData {
        private Long childId;
        private Long studentId;
        private String childName;
        private Long studentClassId;
    }
}