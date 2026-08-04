// ============================================================================
// ⚠️ Firebase 설정 영역
// 실서비스에 배포할 때는 Firebase Console에서 발급받은 실제 설정값으로 아래 내용을 채워주세요.
// 설정하지 않으면 자동으로 브라우저 내의 로컬 저장소(LocalStorage) 모드로 동작합니다.
// ============================================================================
const firebaseConfig = {
  apiKey: "AIzaSyAsk326xyAatoOOyDRvnqYqvruQ5eYj85k",
  authDomain: "kimijcrm.firebaseapp.com",
  projectId: "kimijcrm",
  storageBucket: "kimijcrm.firebasestorage.app",
  messagingSenderId: "514087280756",
  appId: "1:514087280756:web:be4003845787118f783121"
};

// 전역 변수로 데이터베이스 연결 제어 (CORS 및 로컬 파일 직접 열기 차단 방지)
window.db = null;
window.isFirebaseMode = false;

// 설정값이 기본값("YOUR_...")이 아니고 빈 문자열이 아니면 Firebase를 초기화합니다.
if (
  firebaseConfig.apiKey && 
  firebaseConfig.apiKey !== "YOUR_API_KEY_HERE" && 
  !firebaseConfig.apiKey.startsWith("YOUR_")
) {
  try {
    // CDN Compat 라이브러리를 통해 초기화 진행
    firebase.initializeApp(firebaseConfig);
    window.db = firebase.firestore();
    window.isFirebaseMode = true;
    console.log("🔥 Firebase Firestore(Compat)가 성공적으로 연결되었습니다.");
  } catch (error) {
    console.error("Firebase 초기화 중 오류가 발생했습니다. 로컬 스토리지 모드로 자동 전환합니다.", error);
  }
} else {
  console.log("⚠️ Firebase 설정이 입력되지 않아 로컬 테스트 모드(LocalStorage)로 작동합니다.");
}

// 개발자용 강제 로컬 스토리지 모드 URL 파라미터 기능 (?local)
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("local") || urlParams.get("mode") === "local") {
  window.isFirebaseMode = false;
  console.log("🔌 Developer Override: URL 쿼리 파라미터에 의해 강제로 LocalStorage 모드로 작동합니다.");
}
