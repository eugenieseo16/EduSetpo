// 폴더 생성 유지를 위한 파일 입니다. 개발 시작 후 삭제하도록 하겠습니다.

export interface StoryContent {
  speaker: string;
  content: string;
}
export interface StoryRequest {
  userSeq: number; // TODO : 나중에 제거
  storyTitle: string;
  storyContent: StoryContent[];
  storySong: Song;
}

export interface Song {
  musicSeq: number;
  userSeq: number;
  musicTitle: string;
  musicGenre: string;
  musicArtist: string;
  musicAlbum: string;
  musicImage: string;
  musicYoutubeId: string;
  musicLength: number;
  musicReleaseDate: string;
  musicCreatedAt: string;
  musicIsPlayed: boolean;
}
