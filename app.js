// ============================================================================
// 1. 초기 더미 데이터 및 로컬 스토리지 초기화
// ============================================================================
// ============================================================================
// 1. 초기 더미 데이터 및 로컬 스토리지 초기화
// ============================================================================
const PERSONAL_QUESTIONS = [
  { type: "text", title: "최근 귀하를 가장 힘들게 만드는 주된 원인은 무엇인가요?" },
  { type: "choice", title: "현재 본인이 겪고 있는 감정적 어려움을 선택해 주세요.", options: ["감정 기복", "무기력감", "분노 조절의 어려움", "자존감 저하", "대인관계 기피"] },
  { type: "scale", title: "일상생활에서 스스로를 긍정적으로 평가하는 자존감 점수는 몇 점인가요?" },
  { type: "text", title: "대인관계(친구, 동료 등)에서 주로 어떤 갈등이나 대화의 어려움이 발생하나요?" },
  { type: "choice", title: "감정적 어려움이 발생할 때 주로 사용하는 해소 방법은 무엇인가요?", options: ["참거나 무시함", "지인에게 털어놓음", "폭식/음주", "취미나 수면", "전문가 상담"] },
  { type: "scale", title: "평소 타인의 비판이나 평가에 얼마나 민감하게 반응하시나요?" },
  { type: "text", title: "자신의 성격 중 가장 변화시키고 싶거나 개선하고 싶은 부분이 있다면 적어주세요." },
  { type: "choice", title: "일주일 중 감정적으로 가장 안정감을 느끼는 순간은 언제인가요?", options: ["혼자 있을 때", "가족/친구와 소통할 때", "일에 몰두할 때", "휴식/취미 활동 중", "거의 느끼지 못함"] },
  { type: "scale", title: "본인의 일상적인 수면 상태 및 수면의 질은 어떠한가요?" },
  { type: "text", title: "최근 3개월간 귀하의 성격이나 태도가 급격히 변했다고 느낀 사건이 있다면 서술해 주세요." },
  { type: "choice", title: "주로 어떤 대상에게 속마음을 솔직하게 털어놓으시나요?", options: ["아무에게도 털어놓지 않음", "가족", "가까운 친구", "직장 동료", "배우자/연인"] },
  { type: "scale", title: "다른 사람과 가까운 관계를 맺을 때 거절당할 것에 대한 두려움의 정도는 어느 정도인가요?" },
  { type: "text", title: "스스로가 생각하는 본인의 가장 큰 심리적 강점은 무엇인가요?" },
  { type: "choice", title: "자신의 삶에 대한 통제감(스스로 결정하고 이끌어간다는 느낌)은 어느 정도인가요?", options: ["매우 높음", "대체로 높음", "보통", "낮음", "거의 없음"] },
  { type: "scale", title: "최근 일상에서 외로움이나 소외감을 느끼는 정도는 어느 정도인가요?" },
  { type: "text", title: "상담을 통해 해결하고 싶은 가장 즉각적이고 중요한 목표는 무엇인가요?" },
  { type: "choice", title: "본인의 전반적인 에너지 수준(활력)을 평가한다면?", options: ["에너지가 넘침", "평범함", "쉽게 지침", "항상 방전된 느낌"] },
  { type: "scale", title: "과거에 겪었던 부정적인 경험이나 상처(트라우마)가 현재 삶에 미치는 영향은 어느 정도인가요?" },
  { type: "text", title: "만약 미래에 원하는 모습이 된다면, 당신의 삶은 어떻게 변화해 있을까요?" },
  { type: "choice", title: "이전에 상담이나 정신과 치료를 받아본 적이 있다면, 그때의 만족도는 어떠셨나요?", options: ["매우 만족", "다소 만족", "보통/효과 없음", "오히려 부정적 영향", "치료 경험 없음"] }
];

const FAMILY_QUESTIONS = [
  { type: "text", title: "배우자 혹은 가족 구성원과 갈등이 생겼을 때, 주로 드러나는 대화 방식은 어떠한가요?" },
  { type: "choice", title: "배우자/가족과 대화할 때 느끼는 가장 큰 장벽은 무엇인가요?", options: ["대화 자체의 거부", "감정적인 폭언/비난", "내 말을 오해하거나 왜곡함", "서로 공감하지 못함", "주제 회피"] },
  { type: "scale", title: "현재 배우자 혹은 가족 구성원에 대한 신뢰와 친밀감 점수는 몇 점인가요?" },
  { type: "text", title: "갈등의 근본적인 원인이 되는 오랜 반복적인 주제(예: 경제적 문제, 시댁/처가 갈등 등)는 무엇인가요?" },
  { type: "choice", title: "갈등이 고조될 때 귀하가 주로 취하는 행동 방식은 무엇인가요?", options: ["자리를 피하거나 침묵", "소리를 지르거나 화를 냄", "성급하게 사과하고 타협", "이성적으로 설득 시도", "제3자에게 하소연"] },
  { type: "scale", title: "가족 내에서 귀하의 역할이나 헌신이 충분히 인정받고 있다고 느끼시나요?" },
  { type: "text", title: "자녀가 있다면 자녀 양육관이나 훈육 방식의 차이로 인해 겪는 구체적인 의견 대립을 적어주세요." },
  { type: "choice", title: "가족과 함께 보내는 주말이나 여가 시간의 만족도는 어떠한가요?", options: ["매우 만족스럽고 즐거움", "서로 할 일만 하며 보냄", "대체로 어색하거나 긴장됨", "함께 보내는 시간이 거의 없음"] },
  { type: "scale", title: "배우자 혹은 가족과 함께할 때 느껴지는 가사/재정적 분담의 불공평함의 정도는 어느 정도인가요?" },
  { type: "text", title: "배우자나 가족에게 가장 듣고 싶은 따뜻한 한마디나 위로의 말이 있다면 무엇인가요?" },
  { type: "choice", title: "서로의 애정을 표현하는 가장 주된 방식은 무엇인가요?", options: ["선물이나 물질적 지원", "언어적 칭찬과 공감", "포옹이나 스킨십", "가사/육아 돕기", "애정 표현이 아예 없음"] },
  { type: "scale", title: "가족 간의 갈등 상황에서 자녀가 받는 정서적 스트레스나 부정적 영향은 어느 정도라고 보시나요?" },
  { type: "text", title: "결혼 생활이나 가족 관계에서 '이 선만큼은 지켜줬으면 좋겠다'고 생각하는 선(한계선)은 무엇인가요?" },
  { type: "choice", title: "과거 외도나 큰 약속 위반 등 관계를 근본적으로 뒤흔든 사건이 존재하나요?", options: ["있으며 아직 상처로 남아있음", "있었으나 서로 용서하고 극복함", "없음"] },
  { type: "scale", title: "배우자 또는 가족과의 성적 친밀감이나 스킨십에 대한 만족도는 어느 정도인가요?" },
  { type: "text", title: "가족들과 함께 살면서 가장 크게 외로움을 느끼거나 소외감을 받는 순간은 언제인가요?" },
  { type: "choice", title: "본인의 원가족(부모님, 형제자매)과의 관계가 현재 결혼 생활이나 가족 관계에 미치는 영향은 어떠한가요?", options: ["지대한 긍정적 영향", "간섭이나 상처 등 부정적 영향", "거의 영향이 없음"] },
  { type: "scale", title: "현재 가정을 유지하고자 하는 배우자 혹은 가족 구성원들의 의지와 노력의 정도는 어떠한가요?" },
  { type: "text", title: "상담을 마친 후 우리 부부/가족이 도달해 있기를 바라는 구체적인 약속이나 관계의 모습은 무엇인가요?" },
  { type: "choice", title: "상담에 참여하게 된 주된 계기는 무엇인가요?", options: ["본인이 적극적으로 제안함", "배우자나 가족의 강요로 참여", "전문가의 권유", "가정 위기를 극복하려는 최후의 수단"] }
];

const DEPRESSION_QUESTIONS = [
  { type: "text", title: "최근 우울감이나 극심한 불안을 강하게 느끼기 시작한 구체적인 시기와 계기가 있나요?" },
  { type: "choice", title: "우울하거나 불안할 때 머릿속에 가장 자주 떠오르는 부정적인 생각은 무엇인가요?", options: ["나 자신이 쓸모없게 느껴짐", "미래에 나쁜 일이 생길 것 같음", "주변 사람들이 나를 싫어할 것 같음", "과거의 실수가 계속 후회됨", "아무 생각이 나지 않고 멍해짐"] },
  { type: "scale", title: "최근 2주일 동안 거의 매일 우울하거나 슬프다고 느낀 주관적인 빈도는 몇 점인가요?" },
  { type: "text", title: "가슴 답답함, 식은땀, 호흡 곤란 등 불안으로 인해 나타나는 신체적 반응을 서술해 주세요." },
  { type: "choice", title: "불안감이 엄습할 때 이를 다스리기 위해 시도하는 본인만의 대처 행동은 무엇인가요?", options: ["심호흡이나 가벼운 산책", "다른 생각을 하려 노력함", "스마트폰이나 미디어 시청", "폭식이나 흡연/음주", "그저 견뎌내거나 방치함"] },
  { type: "scale", title: "예상치 못한 상황에서 찾아오는 갑작스러운 공포감이나 공황 발작 증상의 빈도는 어느 정도인가요?" },
  { type: "text", title: "스스로를 비난하거나 상황을 파국적으로 해석하는 인지적 습관(예: '나는 무조건 실패할 거야')이 있다면 적어주세요." },
  { type: "choice", title: "현재 복용 중인 정신건강의학과 약물이나 치료 이력이 있으신가요?", options: ["현재 항우울제/항불안제 복용 중", "과거에 치료 경험이 있으나 현재는 중단함", "치료 이력이 전혀 없음"] },
  { type: "scale", title: "아침에 눈을 떴을 때 느껴지는 우울감이나 무력함의 수준은 어느 정도인가요?" },
  { type: "text", title: "불안이나 우울감이 일상적인 사회 활동(출근, 학업, 외출 등)을 마비시키는 구체적인 순간은 언제인가요?" },
  { type: "choice", title: "불안감이 주로 유발되는 환경이나 자극은 무엇인가요?", options: ["많은 사람들 앞에 서거나 발표할 때", "중요한 시험이나 평가를 앞두고", "어두운 밤이나 혼자 있을 때", "특별한 이유 없이 수시로 발생", "미래에 대한 불확실한 걱정 때문"] },
  { type: "scale", title: "나쁜 일(사고, 실패 등)이 반드시 일어날 것이라는 생각에 사로잡혀 안전을 과도하게 확인하는 정도는 어떠한가요?" },
  { type: "text", title: "우울감과 불안감을 잊게 만들거나 나를 미소 짓게 만드는 유일한 안전지대나 활동이 있다면 무엇인가요?" },
  { type: "choice", title: "감정이 극도로 나빠졌을 때 자해나 극단적인 선택에 대한 생각이 떠오른 적이 있습니까?", options: ["전혀 없음", "가끔 생각만 나지만 실행 의지는 없음", "구체적인 충동을 느껴본 적이 있음"] },
  { type: "scale", title: "주변 사람들(가족, 친구)이 나의 힘든 감정을 진심으로 이해하고 지지해 준다고 느끼는 정도는 어떠한가요?" },
  { type: "text", title: "최근 겪었던 무력감으로 인해 포기하게 된 취미 활동이나 일상적 과업이 있다면 무엇인가요?" },
  { type: "choice", title: "우울증이나 불안 장애로 인해 집중력이나 기억력이 예전보다 크게 저하되었다고 느끼시나요?", options: ["예, 현저하게 지장이 있음", "조금 그런 편이지만 정상 생활 가능", "아니오, 전혀 문제없음"] },
  { type: "scale", title: "감정 조절이 되지 않아 갑작스럽게 눈물이 흐르거나 분노가 폭발하는 빈도는 어느 정도인가요?" },
  { type: "text", title: "안전하고 편안한 마음의 회복을 위해 상담사에게 가장 기대하는 정서적 지지나 상담 방식은 무엇인가요?" },
  { type: "choice", title: "우울/불안 관리를 시작하면서 본인이 스스로 다짐한 목표가 있다면 무엇인가요?", options: ["일상 기능을 정상적으로 회복하기", "감정을 편안하게 통제하기", "부정적 생각의 고리 끊어내기", "불면증에서 벗어나기", "타인과 편안하게 소통하기"] }
];

const STRESS_QUESTIONS = [
  { type: "text", title: "현재 귀하에게 극심한 스트레스를 주고 있는 주된 환경(직장, 학업, 가사 등)과 요인을 서술해 주세요." },
  { type: "choice", title: "스트레스로 인해 겪고 있는 가장 두드러지는 신체적 증상은 무엇인가요?", options: ["만성 피로/두통", "소화 불량/식욕 변화", "수면 장애/불면증", "심장 두근거림/호흡 곤란", "증상 없음"] },
  { type: "scale", title: "최근 일상에서 에너지가 바닥나 아무것도 할 수 없다고 느끼는 번아웃의 정도는 몇 점인가요?" },
  { type: "text", title: "일과 사생활의 분리(워라밸)가 잘 이루어지지 않는 구체적인 이유나 장애물은 무엇인가요?" },
  { type: "choice", title: "최근 업무나 공부를 시작할 때 느끼는 감정에 가장 가까운 것은 무엇인가요?", options: ["심한 압박감과 두려움", "지루함과 의욕 상실", "무의미함과 회의감", "적절한 책임감과 성취감"] },
  { type: "scale", title: "현재 귀하가 담당하고 있는 책임이나 업무량의 과도함 수준은 어느 정도인가요?" },
  { type: "text", title: "번아웃 증상을 겪기 시작한 대략적인 시점과 그 시점의 결정적인 계기는 무엇이었나요?" },
  { type: "choice", title: "평소 스트레스를 받았을 때 주변 동료나 친구에게 도움을 요청하는 편인가요?", options: ["자주 도움을 요청하고 조언을 구함", "힘들다고 털어놓기만 함", "혼자 해결하며 티내지 않음", "주변의 도움을 거부함"] },
  { type: "scale", title: "내가 하는 일이나 노력이 정당한 평가와 보상(금전적/정서적)을 받고 있다고 생각하시나요?" },
  { type: "text", title: "온전한 휴식을 취하지 못하게 방해하는 내적인 압박감이나 완벽주의적 성향이 있다면 적어주세요." },
  { type: "choice", title: "퇴근 후 혹은 주말에 업무 연락을 받았을 때의 대처 방식은 무엇인가요?", options: ["즉시 답장하고 업무를 처리함", "불안해하며 확인만 함", "외면하다가 나중에 몰아서 처리", "근무 시간 외 연락은 무시"] },
  { type: "scale", title: "내 업무나 삶에 대한 결정권(자율성)을 내가 쥐고 있다고 느끼는 정도는 어느 정도인가요?" },
  { type: "text", title: "과거 스트레스를 가장 건강하고 효과적으로 극복해 냈던 귀하만의 성공적인 경험은 무엇인가요?" },
  { type: "choice", title: "현재 본인의 스트레스 해소 활동(취미, 운동 등)의 빈도는 어떠한가요?", options: ["거의 매일 꾸준히 함", "일주일에 1~2회", "한 달에 1~2회", "바빠서 전혀 하지 못함"] },
  { type: "scale", title: "내일 아침 출근이나 업무를 시작하는 것에 대해 느껴지는 심리적 거부감의 정도는 어느 정도인가요?" },
  { type: "text", title: "직장 내 대인관계(상사, 부하직원, 클라이언트 등)로 인해 발생하는 구체적인 스트레스 상황을 적어주세요." },
  { type: "choice", title: "나의 가치관과 현재 하고 있는 일의 방향성이 일치한다고 느끼시나요?", options: ["완벽히 일치하여 보람을 느낌", "대체로 일치함", "돈을 벌기 위해 억지로 맞춤", "전혀 맞지 않아 회의감이 듦"] },
  { type: "scale", title: "만성적인 피로로 인해 일상적인 가사일이나 대인관계를 소홀히 하게 되는 빈도는 어느 정도인가요?" },
  { type: "text", title: "스트레스와 지친 마음을 회복하기 위해 상담사에게 바라는 구체적인 솔루션이나 기대사항을 적어주세요." },
  { type: "choice", title: "만약 1주일간 아무 조건 없이 온전한 휴가가 주어진다면, 가장 하고 싶은 활동은 무엇인가요?", options: ["아무것도 안 하고 하루 종일 누워 있기", "자연 속으로 여행 떠나기", "취미 생활 몰두하기", "지인들과 술자리/친목", "밀린 잠 몰아서 자기"] }
];

const CAREER_QUESTIONS = [
  { type: "text", title: "내가 미래에 가장 해보고 싶거나 흥미를 느끼는 분야/직업은 무엇이며, 그 이유는 무엇인가요?" },
  { type: "choice", title: "진로를 결정할 때 가장 방해가 되는 요인은 무엇인가요?", options: ["내가 무엇을 좋아하는지 모름", "성적이 부족해서", "부모님과의 의견 대립", "미래 직업에 대한 정보 부족", "진로를 결정해야 한다는 과도한 압박감"] },
  { type: "scale", title: "현재 스스로 생각하는 학업 성적 및 진로 결정에 대한 자아효능감 점수는 몇 점인가요?" },
  { type: "text", title: "부모님이 나에게 기대하는 진로/직업과 내가 원하는 진로 사이에 차이가 있다면 적어주세요." },
  { type: "choice", title: "나의 재능과 강점을 찾기 위해 주로 참고하는 자료나 평소의 활동은 무엇인가요?", options: ["진로 적성 검사 결과", "학교 동아리나 취미 활동", "유튜브나 인터넷 검색", "부모님이나 선생님과의 상담", "아직 적극적으로 찾지 못함"] },
  { type: "scale", title: "학업 및 성적에 대한 스트레스로 인해 일상생활이나 감정에 지장을 느끼는 정도는 어느 정도인가요?" },
  { type: "text", title: "평소 공부를 하거나 진로 계획을 세울 때 나를 가장 지치고 무기력하게 만드는 생각은 무엇인가요?" },
  { type: "choice", title: "미래의 직업을 선택할 때 내가 가장 중요하게 생각하는 가치는 무엇인가요?", options: ["높은 소득과 재정적 안정", "나의 흥미와 자아실현", "사회적 명예와 인정", "여유로운 삶과 워라밸", "다른 사람을 돕는 가치"] },
  { type: "scale", title: "현재 내가 가고 싶은 고등학교/대학교 또는 학과에 대한 뚜렷한 목표가 설정되어 있는 정도는 어떠한가요?" },
  { type: "text", title: "진로와 진학에 대해 혼자 고민하다가 문득 미래가 불안하고 막막해질 때 대처하는 방식을 적어주세요." },
  { type: "choice", title: "평소 부모님과 나의 미래 및 진로에 대해 얼마나 편안하게 대화하는 편인가요?", options: ["매일 수시로 의견을 나누고 지지받음", "필요할 때만 사무적으로 대화함", "대화하면 매번 싸움으로 끝남", "진로 대화를 거의 나누지 않음"] },
  { type: "scale", title: "내 미래의 방향을 스스로 결정할 수 있다는 자율성과 독립성에 대한 점수는 몇 점인가요?" },
  { type: "text", title: "최근 학교생활에서 가장 큰 스트레스를 주는 상황(친구 관계, 교우 갈등, 선생님과의 관계 등)이 있다면 적어주세요." },
  { type: "choice", title: "앞으로 어떤 형태의 구체적인 진로 체험 활동을 해보고 싶으신가요?", options: ["직무 현장 견학 및 인턴십", "대학 학과 탐방 및 멘토링", "다양한 분야의 직업인 인터뷰", "직접 무언가를 만들어보는 실습", "관심 분야의 자격증 공부"] },
  { type: "scale", title: "진로에 대한 불안감으로 인해 밤에 잠을 자지 못하거나 집중력이 떨어지는 빈도는 어느 정도인가요?" },
  { type: "text", title: "주변 친구들과 나의 성적, 진로 결정을 비교하며 자괴감이나 불안을 느꼈던 경험을 솔직하게 적어주세요." },
  { type: "choice", title: "평소 여가 시간에 스마트폰이나 게임을 하는 주된 이유는 무엇인가요?", options: ["단순한 재미와 소통을 위해", "학업 스트레스를 회피하고 잊기 위해", "할 일이 없어 무의미하게 시간 때우기", "현실 세계의 불안감을 해소하기 위해", "거의 하지 않음"] },
  { type: "scale", title: "나의 미래를 설계해 가는데 학교 진로 상담이나 진학 도우미가 실질적으로 도움이 된 정도는 어느 정도인가요?" },
  { type: "text", title: "상담을 통해 어떤 구체적인 진로 로드맵이나 직업적 탐색을 얻어가고 싶은지 서술해 주세요." },
  { type: "choice", title: "상담이 끝난 후 본인이 가장 기대하는 나의 변화는 무엇인가요?", options: ["나의 적성과 강점을 명확히 알게 됨", "진로 불안감이 해소되고 공부할 동기가 생김", "부모님과 진로 갈등이 완화됨", "성적 스트레스를 조절하는 법을 배움", "현실적인 진로 계획을 세우게 됨"] }
];

const DEFAULT_COUNSELING_TYPES = [
  { 
    id: "c1", 
    title: "개인 심리 상담", 
    description: "우울, 불안, 대인관계 등 개인적인 심리적 어려움을 해결하는 1:1 맞춤형 마음 치유 솔루션", 
    isActive: true,
    questions: PERSONAL_QUESTIONS
  },
  { 
    id: "c2", 
    title: "부부/가족 상담", 
    description: "부부 갈등, 자녀 양육, 가족 내 소통 문제 해결을 돕는 관계 회복 프로그램", 
    isActive: true,
    questions: FAMILY_QUESTIONS
  },
  { 
    id: "c3", 
    title: "우울/불안 관리", 
    description: "일상생활에 지장을 주는 지속적인 우울감과 과도한 불안을 조절하는 심리 안정 프로그램", 
    isActive: true,
    questions: DEPRESSION_QUESTIONS
  },
  { 
    id: "c4", 
    title: "스트레스/번아웃", 
    description: "직장, 학업 등으로 인한 극심한 스트레스와 무기력을 회복하는 리프레시 상담", 
    isActive: true,
    questions: STRESS_QUESTIONS
  },
  { 
    id: "c5", 
    title: "청소년 진로 상담", 
    description: "학업 스트레스, 진로 탐색, 청소년기 정서 및 성격 발달을 돕는 코칭", 
    isActive: true,
    questions: CAREER_QUESTIONS
  }
];

const DEFAULT_CLIENTS = [
  { id: "client1", name: "김지수", birthDate: "19900101", phone: "010-1234-5678", createdAt: Date.now() - 86400000 * 3 },
  { id: "client2", name: "이마음", birthDate: "19950505", phone: "010-2345-6789", createdAt: Date.now() - 86400000 * 2 },
  { id: "client3", name: "박기쁨", birthDate: "19881225", phone: "010-3456-7890", createdAt: Date.now() - 86400000 * 1 }
];

const DEFAULT_RECORDS = [
  { 
    id: "rec1", 
    clientId: "client1", 
    clientName: "김지수", 
    clientBirthDate: "19900101", 
    counselingTypeId: "c1", 
    counselingTitle: "개인 심리 상담", 
    submittedAt: Date.now() - 86400000 * 2, 
    status: "Pending",
    answers: [
      { question: "최근 가장 고민되는 일은 무엇인가요?", answer: "직장에서 새로운 직무를 맡아 스트레스가 많습니다." },
      { question: "상담을 통해 구체적으로 어떤 도움을 받고 싶으신가요?", answer: "마인드 컨트롤 방법과 번아웃 예방법을 배우고 싶습니다." }
    ]
  },
  { 
    id: "rec2", 
    clientId: "client2", 
    clientName: "이마음", 
    clientBirthDate: "19950505", 
    counselingTypeId: "c3", 
    counselingTitle: "우울/불안 관리", 
    submittedAt: Date.now() - 86400000 * 1, 
    status: "In Progress",
    answers: [
      { question: "우울하거나 불안할 때 나타나는 주요 신체적/감정적 증상은 무엇인가요?", answer: "가슴이 답답하고 잠을 잘 자지 못합니다." }
    ]
  }
];

function initLocalStorage() {
  let storedTypes = localStorage.getItem("crm_counseling_types");
  if (!storedTypes) {
    localStorage.setItem("crm_counseling_types", JSON.stringify(DEFAULT_COUNSELING_TYPES));
  } else {
    try {
      const types = JSON.parse(storedTypes);
      const updated = types.map(t => {
        const defaultType = DEFAULT_COUNSELING_TYPES.find(dt => dt.id === t.id);
        if (defaultType) {
          return {
            ...t,
            questions: defaultType.questions
          };
        }
        return t;
      });
      localStorage.setItem("crm_counseling_types", JSON.stringify(updated));
    } catch (e) {
      localStorage.setItem("crm_counseling_types", JSON.stringify(DEFAULT_COUNSELING_TYPES));
    }
  }

  if (!localStorage.getItem("crm_clients")) {
    localStorage.setItem("crm_clients", JSON.stringify(DEFAULT_CLIENTS));
  }
  if (!localStorage.getItem("crm_records")) {
    localStorage.setItem("crm_records", JSON.stringify(DEFAULT_RECORDS));
  }
}

async function initFirebaseData() {
  if (!window.isFirebaseMode) return;
  try {
    const typesSnap = await window.db.collection("counselingTypes").get();
    if (typesSnap.empty) {
      for (const type of DEFAULT_COUNSELING_TYPES) {
        await window.db.collection("counselingTypes").add({
          title: type.title,
          description: type.description,
          isActive: type.isActive,
          questions: type.questions || [],
          createdAt: Date.now()
        });
      }
      console.log("🔥 Firebase: 기본 상담 종류 데이터를 초기화했습니다.");
    } else {
      // 기본 타입 (이름 매칭)의 질문 목록 동기화
      for (const doc of typesSnap.docs) {
        const data = doc.data();
        const defaultType = DEFAULT_COUNSELING_TYPES.find(dt => dt.title === data.title);
        if (defaultType) {
          await window.db.collection("counselingTypes").doc(doc.id).update({
            questions: defaultType.questions
          });
        }
      }
    }

    const clientsSnap = await window.db.collection("clients").get();
    if (clientsSnap.empty) {
      const savedClientIds = [];
      for (const client of DEFAULT_CLIENTS) {
        const docRef = await window.db.collection("clients").add({
          name: client.name,
          birthDate: client.birthDate,
          phone: client.phone || "010-0000-0000",
          createdAt: client.createdAt
        });
        savedClientIds.push({ oldId: client.id, newId: docRef.id, name: client.name, birthDate: client.birthDate, phone: client.phone });
      }
      
      const recordsSnap = await window.db.collection("counselingRecords").get();
      if (recordsSnap.empty) {
        const typesListSnap = await window.db.collection("counselingTypes").get();
        const firebaseTypes = typesListSnap.docs.map(d => ({ id: d.id, title: d.data().title }));
        
        for (const record of DEFAULT_RECORDS) {
          const clientMapping = savedClientIds.find(c => c.oldId === record.clientId);
          const matchedType = firebaseTypes.find(t => t.title === record.counselingTitle);
          
          if (clientMapping && matchedType) {
            await window.db.collection("counselingRecords").add({
              clientId: clientMapping.newId,
              clientName: clientMapping.name,
              clientBirthDate: clientMapping.birthDate,
              counselingTypeId: matchedType.id,
              counselingTitle: matchedType.title,
              answers: record.answers || [],
              submittedAt: record.submittedAt,
              status: record.status
            });
          }
        }
        console.log("🔥 Firebase: 기본 내담자 및 신청 내역 샘플 데이터를 초기화했습니다.");
      }
    }
  } catch (error) {
    console.error("Firebase 초기화 중 에러 발생:", error);
  }
}

// ============================================================================
// 2. 데이터베이스 입출력 함수 (Firebase / LocalStorage 하이브리드)
// ============================================================================

async function dbGetClients() {
  if (window.isFirebaseMode) {
    try {
      const snap = await window.db.collection("clients").orderBy("createdAt", "desc").get();
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (e) {
      console.error(e);
      return [];
    }
  } else {
    return JSON.parse(localStorage.getItem("crm_clients") || "[]");
  }
}

async function dbAddClient(name, birthDate, phone) {
  const normalizedBirth = birthDate.trim().replace(/-/g, "");
  const cleanPhone = phone.trim();
  if (window.isFirebaseMode) {
    const docRef = await window.db.collection("clients").add({
      name: name.trim(),
      birthDate: normalizedBirth,
      phone: cleanPhone,
      createdAt: Date.now()
    });
    return docRef.id;
  } else {
    const clients = await dbGetClients();
    const newId = "client_" + Date.now();
    clients.unshift({
      id: newId,
      name: name.trim(),
      birthDate: normalizedBirth,
      phone: cleanPhone,
      createdAt: Date.now()
    });
    localStorage.setItem("crm_clients", JSON.stringify(clients));
    return newId;
  }
}

async function dbUpdateClientInfo(clientId, phone, birthDate) {
  if (window.isFirebaseMode) {
    await window.db.collection("clients").doc(clientId).update({
      phone: phone.trim(),
      birthDate: birthDate.trim().replace(/-/g, "")
    });
  } else {
    const clients = await dbGetClients();
    const client = clients.find(c => c.id === clientId);
    if (client) {
      client.phone = phone.trim();
      client.birthDate = birthDate.trim().replace(/-/g, "");
      localStorage.setItem("crm_clients", JSON.stringify(clients));
    }
  }
}

async function dbDeleteClient(clientId) {
  if (window.isFirebaseMode) {
    await window.db.collection("clients").doc(clientId).delete();
    const recordsSnap = await window.db.collection("counselingRecords").where("clientId", "==", clientId).get();
    for (const doc of recordsSnap.docs) {
      await doc.ref.delete();
    }
  } else {
    const clients = await dbGetClients();
    const filteredClients = clients.filter(c => c.id !== clientId);
    localStorage.setItem("crm_clients", JSON.stringify(filteredClients));

    const records = JSON.parse(localStorage.getItem("crm_records") || "[]");
    const filteredRecords = records.filter(r => r.clientId !== clientId);
    localStorage.setItem("crm_records", JSON.stringify(filteredRecords));
  }
}

async function dbGetCounselingTypes(onlyActive = false) {
  if (window.isFirebaseMode) {
    try {
      const snap = await window.db.collection("counselingTypes").get();
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      const sorted = list.sort((a, b) => a.title.localeCompare(b.title));
      return onlyActive ? sorted.filter(t => t.isActive) : sorted;
    } catch (e) {
      console.error(e);
      return [];
    }
  } else {
    const list = JSON.parse(localStorage.getItem("crm_counseling_types") || "[]");
    return onlyActive ? list.filter(t => t.isActive) : list;
  }
}

async function dbAddCounselingType(title, description, questions = []) {
  if (window.isFirebaseMode) {
    await window.db.collection("counselingTypes").add({
      title: title.trim(),
      description: description.trim(),
      isActive: true,
      questions: questions,
      createdAt: Date.now()
    });
  } else {
    const types = await dbGetCounselingTypes();
    types.push({
      id: "c_" + Date.now(),
      title: title.trim(),
      description: description.trim(),
      isActive: true,
      questions: questions
    });
    localStorage.setItem("crm_counseling_types", JSON.stringify(types));
  }
}

async function dbUpdateCounselingType(id, title, description, questions = []) {
  if (window.isFirebaseMode) {
    await window.db.collection("counselingTypes").doc(id).update({
      title: title.trim(),
      description: description.trim(),
      questions: questions
    });
  } else {
    const types = await dbGetCounselingTypes();
    const idx = types.findIndex(t => t.id === id);
    if (idx !== -1) {
      types[idx].title = title.trim();
      types[idx].description = description.trim();
      types[idx].questions = questions;
      localStorage.setItem("crm_counseling_types", JSON.stringify(types));
    }
  }
}

async function dbToggleCounselingTypeActive(id, isActive) {
  if (window.isFirebaseMode) {
    await window.db.collection("counselingTypes").doc(id).update({ isActive });
  } else {
    const types = await dbGetCounselingTypes();
    const idx = types.findIndex(t => t.id === id);
    if (idx !== -1) {
      types[idx].isActive = isActive;
      localStorage.setItem("crm_counseling_types", JSON.stringify(types));
    }
  }
}

async function dbDeleteCounselingType(id) {
  if (window.isFirebaseMode) {
    await window.db.collection("counselingTypes").doc(id).delete();
  } else {
    let types = await dbGetCounselingTypes();
    types = types.filter(t => t.id !== id);
    localStorage.setItem("crm_counseling_types", JSON.stringify(types));
  }
}

async function dbGetRecords() {
  if (window.isFirebaseMode) {
    try {
      const snap = await window.db.collection("counselingRecords").orderBy("submittedAt", "desc").get();
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (e) {
      console.error(e);
      return [];
    }
  } else {
    return JSON.parse(localStorage.getItem("crm_records") || "[]");
  }
}

async function dbAddRecord(clientId, clientName, clientBirthDate, counselingTypeId, counselingTitle, answers = []) {
  if (window.isFirebaseMode) {
    await window.db.collection("counselingRecords").add({
      clientId,
      clientName,
      clientBirthDate,
      counselingTypeId,
      counselingTitle,
      answers,
      submittedAt: Date.now(),
      status: "Pending"
    });
  } else {
    const records = await dbGetRecords();
    records.unshift({
      id: "rec_" + Date.now(),
      clientId,
      clientName,
      clientBirthDate,
      counselingTypeId,
      counselingTitle,
      answers,
      submittedAt: Date.now(),
      status: "Pending"
    });
    localStorage.setItem("crm_records", JSON.stringify(records));
  }
}

async function dbSubmitRecordAnswers(recordId, answers) {
  if (window.isFirebaseMode) {
    await window.db.collection("counselingRecords").doc(recordId).update({
      answers: answers,
      submittedAt: Date.now()
    });
  } else {
    const records = await dbGetRecords();
    const idx = records.findIndex(r => r.id === recordId);
    if (idx !== -1) {
      records[idx].answers = answers;
      records[idx].submittedAt = Date.now();
      localStorage.setItem("crm_records", JSON.stringify(records));
    }
  }
}

async function dbUpdateRecordStatus(recordId, newStatus) {
  if (window.isFirebaseMode) {
    await window.db.collection("counselingRecords").doc(recordId).update({ status: newStatus });
  } else {
    const records = await dbGetRecords();
    const idx = records.findIndex(r => r.id === recordId);
    if (idx !== -1) {
      records[idx].status = newStatus;
      localStorage.setItem("crm_records", JSON.stringify(records));
    }
  }
}

async function dbDeleteRecord(recordId) {
  if (window.isFirebaseMode) {
    await window.db.collection("counselingRecords").doc(recordId).delete();
  } else {
    const records = await dbGetRecords();
    const updated = records.filter(r => r.id !== recordId);
    localStorage.setItem("crm_records", JSON.stringify(updated));
  }
}

// ============================================================================
// 3. UI 및 상태 제어
// ============================================================================
let currentClient = null;
try {
  const _stored = sessionStorage.getItem("crm_current_client");
  if (_stored) {
    currentClient = JSON.parse(_stored);
  }
} catch (e) {
  console.error("Session parse error:", e);
}
let selectedCounselingType = null;
let currentRecordId = null;
let currentDrawerClient = null;
let activeTab = "clients";
let countdownTimer = null;

// 질문 에디터 상태 관리 (추가, 수정 별도 관리)
let addQuestionsState = [];
let editQuestionsState = [];

// DOM 요소 매핑
const DOM = {
  firebaseNoticeBanner: document.getElementById("firebase-notice-banner"),
  btnCloseBanner: document.getElementById("btn-close-banner"),
  
  // 포탈 영역
  clientLoginView: document.getElementById("client-login-view"),
  clientSelectView: document.getElementById("client-select-view"),
  clientQuestionnaireView: document.getElementById("client-questionnaire-view"),
  clientSuccessView: document.getElementById("client-success-view"),
  adminLoginView: document.getElementById("admin-login-view"),
  adminPortalView: document.getElementById("admin-portal-view"),
  
  // 로그인 폼
  formClientLogin: document.getElementById("form-client-login"),
  loginName: document.getElementById("login-name"),
  loginBirth: document.getElementById("login-birth"),
  btnGotoAdmin: document.getElementById("btn-goto-admin"),
  
  // 상담 선택 페이지
  currentClientDisplay: document.getElementById("current-client-display"),
  counselingGrid: document.getElementById("counseling-grid"),
  btnClientSubmit: document.getElementById("btn-client-submit"),
  btnClientLogout: document.getElementById("btn-client-logout"),

  // 상담 질문지 페이지
  questionnaireServiceTitle: document.getElementById("questionnaire-service-title"),
  formClientQuestionnaire: document.getElementById("form-client-questionnaire"),
  dynamicQuestionsContainer: document.getElementById("dynamic-questions-container"),
  btnQuestionnaireBack: document.getElementById("btn-questionnaire-back"),
  
  // 신청 성공 페이지
  successProgressBar: document.getElementById("success-progress-bar"),
  countdownTimerDisplay: document.getElementById("countdown-timer-display"),
  btnSuccessHome: document.getElementById("btn-success-home"),
  
  // 관리자 로그인
  formAdminLogin: document.getElementById("form-admin-login"),
  adminUsername: document.getElementById("admin-username"),
  adminPassword: document.getElementById("admin-password"),
  btnAdminLoginBack: document.getElementById("btn-admin-login-back"),
  
  // 관리자 사이드바 및 네비게이션
  navClients: document.getElementById("nav-clients"),
  navCounseling: document.getElementById("nav-counseling"),
  btnAdminLogout: document.getElementById("btn-admin-logout"),
  
  // 관리자 탭 콘텐츠
  tabClients: document.getElementById("tab-clients"),
  tabCounseling: document.getElementById("tab-counseling"),
  
  // 관리자 통계 및 테이블
  statTotalClients: document.getElementById("stat-total-clients"),
  statPendingSessions: document.getElementById("stat-pending-sessions"),
  statCompletedSessions: document.getElementById("stat-completed-sessions"),
  searchClient: document.getElementById("search-client"),
  clientListTableBody: document.getElementById("client-list-table-body"),
  
  // 상담 종류 관리 그리드
  counselingManagementGrid: document.getElementById("counseling-management-grid"),
  btnOpenCounselingModal: document.getElementById("btn-open-counseling-modal"),
  
  // 모달 레이어들
  confirmModal: document.getElementById("confirm-modal"),
  btnConfirmCancel: document.getElementById("btn-confirm-cancel"),
  btnConfirmSubmitOk: document.getElementById("btn-confirm-submit-ok"),
  
  registerModal: document.getElementById("register-modal"),
  formRegisterClient: document.getElementById("form-register-client"),
  registerName: document.getElementById("register-name"),
  registerBirth: document.getElementById("register-birth"),
  registerPhone: document.getElementById("register-phone"),
  btnOpenRegisterModal: document.getElementById("btn-open-register-modal"),
  btnCloseRegisterOverlay: document.getElementById("btn-close-register-overlay"),
  
  addServiceModal: document.getElementById("add-service-modal"),
  formAddCounseling: document.getElementById("form-add-counseling"),
  addCounselingTitle: document.getElementById("add-counseling-title"),
  addCounselingDesc: document.getElementById("add-counseling-desc"),
  addQuestionsList: document.getElementById("add-questions-list"),
  btnAddChoiceQ: document.getElementById("btn-add-choice-q"),
  btnAddTextQ: document.getElementById("btn-add-text-q"),
  btnCloseServiceOverlay: document.getElementById("btn-close-service-overlay"),
  
  editServiceModal: document.getElementById("edit-service-modal"),
  formEditCounseling: document.getElementById("form-edit-counseling"),
  editCounselingId: document.getElementById("edit-counseling-id"),
  editCounselingTitle: document.getElementById("edit-counseling-title"),
  editCounselingDesc: document.getElementById("edit-counseling-desc"),
  editQuestionsList: document.getElementById("edit-questions-list"),
  btnEditAddChoiceQ: document.getElementById("btn-edit-add-choice-q"),
  btnEditAddTextQ: document.getElementById("btn-edit-add-text-q"),
  
  // 내담자 Drawer
  clientDrawer: document.getElementById("client-drawer"),
  clientDrawerOverlay: document.getElementById("client-drawer-overlay"),
  drawerAvatar: document.getElementById("drawer-avatar"),
  drawerClientName: document.getElementById("drawer-client-name"),
  drawerClientBirth: document.getElementById("drawer-client-birth"),
  drawerInputPhone: document.getElementById("drawer-input-phone"),
  drawerInputBirth: document.getElementById("drawer-input-birth"),
  drawerClientRegdate: document.getElementById("drawer-client-regdate"),
  formAssignCounseling: document.getElementById("form-assign-counseling"),
  assignCounselingSelect: document.getElementById("assign-counseling-select"),
  drawerHistoryList: document.getElementById("drawer-history-list"),
  
  // 토스트 컨테이너
  toastContainer: document.getElementById("toastContainer")
};

// ============================================================================
// 4. 화면 네비게이션 제어
// ============================================================================
// Hash mappings to view IDs
const HASH_TO_VIEW = {
  "#/login": "client-login",
  "#/select": "client-select",
  "#/questionnaire": "client-questionnaire",
  "#/success": "client-success",
  "#/admin/login": "admin-login",
  "#/admin/dashboard": "admin-dashboard"
};

const VIEW_TO_HASH = {
  "client-login": "#/login",
  "client-select": "#/select",
  "client-questionnaire": "#/questionnaire",
  "client-success": "#/success",
  "admin-login": "#/admin/login",
  "admin-dashboard": "#/admin/dashboard"
};

// URL 해시를 변경하여 라우팅 유도
function showView(viewId) {
  const hash = VIEW_TO_HASH[viewId] || "#/login";
  if (window.location.hash !== hash) {
    window.location.hash = hash;
  } else {
    handleRouting();
  }
}

// 실제 DOM 전환 및 데이터 갱신 처리
function renderView(viewId) {
  const views = [
    DOM.clientLoginView,
    DOM.clientSelectView,
    DOM.clientQuestionnaireView,
    DOM.clientSuccessView,
    DOM.adminLoginView,
    DOM.adminPortalView
  ];
  views.forEach(v => {
    if (v) v.classList.add("hidden");
  });

  if (viewId === "client-login") {
    DOM.clientLoginView.classList.remove("hidden");
    DOM.loginName.value = "";
    DOM.loginBirth.value = "";
    currentClient = null;
    selectedCounselingType = null;
    sessionStorage.removeItem("crm_current_client");
  } else if (viewId === "client-select") {
    DOM.clientSelectView.classList.remove("hidden");
    DOM.currentClientDisplay.textContent = currentClient.name;
    DOM.btnClientSubmit.disabled = true;
    selectedCounselingType = null;
    renderClientSelectCards();
  } else if (viewId === "client-questionnaire") {
    DOM.clientQuestionnaireView.classList.remove("hidden");
    initClientQuestionnaire();
  } else if (viewId === "client-success") {
    DOM.clientSuccessView.classList.remove("hidden");
    startSuccessCountdown();
  } else if (viewId === "admin-login") {
    DOM.adminLoginView.classList.remove("hidden");
    DOM.adminUsername.value = "";
    DOM.adminPassword.value = "";
  } else if (viewId === "admin-dashboard") {
    DOM.adminPortalView.classList.remove("hidden");
    refreshAdminDashboard();
  }
}

// 해시 변경 감지 및 인가 가드(Guard) 처리
function handleRouting() {
  if (!window.location.hash) {
    window.location.hash = "#/login";
    return;
  }

  const hash = window.location.hash;
  const viewId = HASH_TO_VIEW[hash] || "client-login";

  // 내담자 인증 가드
  if (viewId === "client-select" || viewId === "client-questionnaire" || viewId === "client-success") {
    if (!currentClient) {
      window.location.hash = "#/login";
      return;
    }
  }

  // 관리자 인증 가드
  if (viewId === "admin-dashboard") {
    if (sessionStorage.getItem("crm_admin_logged") !== "true") {
      window.location.hash = "#/admin/login";
      return;
    }
  }

  renderView(viewId);
}

// 토스트 안내 메시지
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  
  const bgColor = type === "success" ? "bg-primary" : "bg-error";
  const textColor = "text-white";
  const icon = type === "success" ? "check_circle" : "error";
  
  toast.className = `flex items-center space-x-2 ${bgColor} ${textColor} px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 translate-y-4 opacity-0 font-body-sm text-body-sm max-w-sm w-full`;
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px]">${icon}</span>
    <span>${message}</span>
  `;
  
  DOM.toastContainer.appendChild(toast);
  
  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-4", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");
  });

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-4", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// 이름 이니셜 따기
function getInitials(name) {
  if (!name) return "??";
  const clean = name.trim();
  if (clean.length <= 2) return clean;
  const parts = clean.split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return clean.slice(0, 2);
}

// ============================================================================
// 5. 고객용 핵심 기능 개발
// ============================================================================

// 생년월일 자동 대시 기입 기능
DOM.loginBirth.addEventListener("input", (e) => {
  let val = e.target.value.replace(/\D/g, "");
  if (val.length > 8) val = val.slice(0, 8);
  if (val.length >= 4 && val.length < 6) {
    val = val.slice(0, 4) + "-" + val.slice(4);
  } else if (val.length >= 6) {
    val = val.slice(0, 4) + "-" + val.slice(4, 6) + "-" + val.slice(6);
  }
  e.target.value = val;
});

DOM.registerBirth.addEventListener("input", (e) => {
  let val = e.target.value.replace(/\D/g, "");
  if (val.length > 8) val = val.slice(0, 8);
  if (val.length >= 4 && val.length < 6) {
    val = val.slice(0, 4) + "-" + val.slice(4);
  } else if (val.length >= 6) {
    val = val.slice(0, 4) + "-" + val.slice(4, 6) + "-" + val.slice(6);
  }
  e.target.value = val;
});

// 손님 로그인
async function handleClientLogin(e) {
  if (e) e.preventDefault();
  const name = DOM.loginName.value.trim();
  const birth = DOM.loginBirth.value.trim().replace(/-/g, "");

  if (!name || birth.length !== 8) {
    showToast("이름과 생년월일(8자리)을 형식에 맞게 입력해 주세요.", "error");
    return;
  }

  const clients = await dbGetClients();
  const matchedClient = clients.find(c => c.name === name && c.birthDate.replace(/-/g, "") === birth);

  if (matchedClient) {
    currentClient = matchedClient;
    sessionStorage.setItem("crm_current_client", JSON.stringify(matchedClient));
    showToast(`${name}님, 환영합니다!`, "success");
    showView("client-select");
  } else {
    showToast("등록되지 않은 내담자입니다. 데스크에 문의 바랍니다.", "error");
  }
}

// 아이콘 매핑 헬퍼
const iconMapping = {
  "개인 심리 상담": "person",
  "부부/가족 상담": "family_restroom",
  "부부 & 가족 상담": "family_restroom",
  "우울/불안 관리": "mood_bad",
  "우울 & 불안 치유": "mood_bad",
  "스트레스/번아웃": "battery_0_bar",
  "스트레스 & 번아웃 관리": "battery_0_bar",
  "청소년 진로 상담": "school",
  "청소년 진로 & 학습 상담": "school"
};

// 손님 상담 신청 카드 리스트 렌더링 (배정받은 상담만 필터링 노출)
async function renderClientSelectCards() {
  DOM.counselingGrid.innerHTML = `<div class="col-span-3 text-center text-on-surface-variant/50 py-10">목록을 불러오는 중...</div>`;
  DOM.btnClientSubmit.disabled = true;

  const records = await dbGetRecords();
  const allTypes = await dbGetCounselingTypes(true);

  // 현재 로그인한 내담자의 Pending 상태이고 아직 답변을 제출하지 않은 기록만 필터링
  const assignedRecords = records.filter(r => 
    r.clientId === currentClient.id && 
    r.status === "Pending" && 
    (!r.answers || r.answers.length === 0)
  );

  if (assignedRecords.length === 0) {
    DOM.counselingGrid.innerHTML = `<div class="col-span-3 text-center text-on-surface-variant/50 py-10">배정받은 상담 내역이 없습니다. 데스크에 문의해주세요.</div>`;
    return;
  }

  const list = [];
  assignedRecords.forEach(rec => {
    let typeObj = allTypes.find(t => t.id === rec.counselingTypeId);
    if (!typeObj) {
      typeObj = {
        id: rec.counselingTypeId,
        title: rec.counselingTitle,
        description: "관리자가 배정해 주신 상담 프로그램입니다. 답변을 입력해 주세요.",
        questions: []
      };
    }
    list.push({
      ...typeObj,
      recordId: rec.id
    });
  });

  DOM.counselingGrid.innerHTML = "";
  list.forEach(opt => {
    const card = document.createElement("div");
    card.className = `group relative p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 
      shadow-[0_8px_32px_rgba(112,128,144,0.04)] hover:shadow-[0_16px_48px_rgba(112,128,144,0.12)]
      cursor-pointer transition-all duration-300 flex flex-col gap-4 overflow-hidden`;
    card.dataset.id = opt.id;
    card.dataset.title = opt.title;

    const icon = iconMapping[opt.title] || "spa";

    card.innerHTML = `
      <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      <div class="absolute top-6 right-6 w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center transition-colors duration-200 check-circle">
        <span class="material-symbols-outlined text-[16px] text-white opacity-0 transform scale-50 transition-all duration-200 check-icon">check</span>
      </div>
      <div class="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center icon-container transition-colors duration-300">
        <span class="material-symbols-outlined text-[24px] text-on-secondary-container">${icon}</span>
      </div>
      <div>
        <h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">${opt.title}</h3>
        <p class="text-body-sm font-body-sm text-on-surface-variant line-clamp-2">${opt.description}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      // 선택 시 하이라이트 토글 (단일 선택)
      document.querySelectorAll("#counseling-grid .group").forEach(c => {
        c.classList.remove("border-primary", "ring-2", "ring-primary/20", "bg-primary-container/10");
        c.querySelector(".check-circle").className = "absolute top-6 right-6 w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center transition-colors duration-200 check-circle";
        c.querySelector(".check-icon").className = "material-symbols-outlined text-[16px] text-white opacity-0 transform scale-50 transition-all duration-200 check-icon";
        c.querySelector(".icon-container").className = "w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center icon-container transition-colors duration-300";
      });

      card.classList.add("border-primary", "ring-2", "ring-primary/20", "bg-primary-container/10");
      card.querySelector(".check-circle").className = "absolute top-6 right-6 w-6 h-6 rounded-full border-2 border-primary bg-primary flex items-center justify-center transition-colors duration-200 check-circle";
      card.querySelector(".check-icon").className = "material-symbols-outlined text-[16px] text-white opacity-100 scale-100 transform transition-all duration-200 check-icon";
      card.querySelector(".icon-container").className = "w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center icon-container transition-colors duration-300";

      selectedCounselingType = opt;
      currentRecordId = opt.recordId;
      DOM.btnClientSubmit.disabled = false;
    });

    DOM.counselingGrid.appendChild(card);
  });
}

// [고도화] 상담 질문지 렌더링 초기화
function initClientQuestionnaire() {
  DOM.questionnaireServiceTitle.textContent = selectedCounselingType.title;
  DOM.dynamicQuestionsContainer.innerHTML = "";

  const customQs = selectedCounselingType.questions || [];

  if (customQs.length > 0) {
    // 맞춤형 커스텀 질문 렌더링
    customQs.forEach((q, idx) => {
      const qBlock = document.createElement("div");
      qBlock.className = "flex flex-col gap-sm question-block";
      qBlock.dataset.type = q.type;
      qBlock.dataset.title = q.title;

      let inputHtml = "";
      if (q.type === "text") {
        inputHtml = `
          <div class="ml-[28px] relative group/textarea">
            <textarea class="w-full bg-surface-container-low text-on-surface font-body-md p-sm px-md rounded-xl border border-outline-variant/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 placeholder:text-on-surface-variant/50 resize-none overflow-hidden min-h-[44px]" placeholder="내용을 기입해 주세요..." rows="1" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'" required></textarea>
          </div>
        `;
      } else if (q.type === "choice") {
        const optionsHtml = (q.options || []).map((opt, oIdx) => `
          <label class="cursor-pointer w-full flex items-center gap-md py-sm px-md rounded-2xl border border-outline-variant/30 bg-surface-container-lowest hover:bg-surface-container-low transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5">
            <input class="peer sr-only" name="custom_q_${idx}" type="radio" value="${opt}" required>
            <div class="w-6 h-6 rounded-full border border-outline-variant/60 bg-white flex items-center justify-center text-label-sm font-semibold transition-all peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary">
              ${oIdx + 1}
            </div>
            <span class="font-normal text-[15px] leading-normal text-on-surface-variant peer-checked:text-primary peer-checked:font-medium">
              ${opt}
            </span>
          </label>
        `).join("");

        inputHtml = `
          <div class="ml-[28px] mt-sm flex flex-col gap-sm">
            ${optionsHtml}
          </div>
        `;
      } else if (q.type === "scale") {
        inputHtml = `
          <div class="ml-[28px] mt-md">
            <div class="flex justify-between items-center px-sm mb-xs">
              <span class="font-label-sm text-label-sm text-on-surface-variant">매우 낮음</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">매우 높음</span>
            </div>
            <div class="flex justify-between items-center gap-xs md:gap-sm bg-surface-container-low p-sm rounded-xl border border-outline-variant/30 scale-btn-container">
              <button type="button" class="scale-btn flex-1 py-sm rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-primary font-headline-sm border-2 border-transparent">1</button>
              <div class="w-px h-6 bg-outline-variant/30 hidden md:block"></div>
              <button type="button" class="scale-btn flex-1 py-sm rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-primary font-headline-sm border-2 border-transparent">2</button>
              <div class="w-px h-6 bg-outline-variant/30 hidden md:block"></div>
              <button type="button" class="scale-btn flex-1 py-sm rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-primary font-headline-sm border-2 border-transparent">3</button>
              <div class="w-px h-6 bg-outline-variant/30 hidden md:block"></div>
              <button type="button" class="scale-btn flex-1 py-sm rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-primary font-headline-sm border-2 border-transparent">4</button>
              <div class="w-px h-6 bg-outline-variant/30 hidden md:block"></div>
              <button type="button" class="scale-btn flex-1 py-sm rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-primary font-headline-sm border-2 border-transparent">5</button>
            </div>
          </div>
        `;
      }

      qBlock.innerHTML = `
        <label class="font-bold text-[18px] text-on-surface flex items-start gap-sm leading-relaxed">
          <span class="text-primary font-bold text-[18px]">${idx + 1}.</span>
          ${q.title}
        </label>
        ${inputHtml}
      `;
      DOM.dynamicQuestionsContainer.appendChild(qBlock);
    });
  } else {
    // 질문 미등록 시 기본 4문항 템플릿 로드
    DOM.dynamicQuestionsContainer.innerHTML = `
      <!-- Q1: Short Answer -->
      <div class="flex flex-col gap-sm question-block" data-type="text" data-title="최근 가장 고민되는 일은 무엇인가요?">
        <label class="font-bold text-[18px] text-on-surface flex items-start gap-sm leading-relaxed">
          <span class="text-primary font-bold text-[18px]">1.</span>
          최근 가장 고민되는 일은 무엇인가요?
        </label>
        <p class="font-body-sm text-body-sm text-on-surface-variant ml-[28px] mb-xs">간단한 키워드나 문장으로 작성해 주셔도 좋습니다.</p>
        <div class="ml-[28px] relative group/textarea">
          <textarea class="w-full bg-surface-container-low text-on-surface font-body-md p-sm px-md rounded-xl border border-outline-variant/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 placeholder:text-on-surface-variant/50 resize-none overflow-hidden min-h-[44px]" placeholder="예: 직장 내 대인관계, 수면 문제 등" rows="1" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'" required></textarea>
        </div>
      </div>

      <!-- Q2: Long Answer -->
      <div class="flex flex-col gap-sm question-block" data-type="text" data-title="상담을 통해 구체적으로 어떤 도움을 받고 싶으신가요?">
        <label class="font-bold text-[18px] text-on-surface flex items-start gap-sm leading-relaxed">
          <span class="text-primary font-bold text-[18px]">2.</span>
          상담을 통해 구체적으로 어떤 도움을 받고 싶으신가요?
        </label>
        <p class="font-body-sm text-body-sm text-on-surface-variant ml-[28px] mb-xs">기대하시는 변화나 목표가 있다면 자유롭게 적어주세요.</p>
        <div class="ml-[28px] relative group/textarea">
          <textarea class="w-full bg-surface-container-low text-on-surface font-body-md p-sm px-md rounded-xl border border-outline-variant/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 placeholder:text-on-surface-variant/50 resize-none overflow-hidden min-h-[44px]" placeholder="자유롭게 작성해주세요..." rows="1" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'" required></textarea>
        </div>
      </div>

      <!-- Q3: Scale -->
      <div class="flex flex-col gap-sm question-block" data-type="scale" data-title="현재 일상 생활의 스트레스 정도를 선택해주세요.">
        <label class="font-bold text-[18px] text-on-surface flex items-start gap-sm leading-relaxed">
          <span class="text-primary font-bold text-[18px]">3.</span>
          현재 일상 생활의 스트레스 정도를 선택해주세요.
        </label>
        <div class="ml-[28px] mt-md">
          <div class="flex justify-between items-center px-sm mb-xs">
            <span class="font-label-sm text-label-sm text-on-surface-variant">매우 낮음</span>
            <span class="font-label-sm text-label-sm text-on-surface-variant">매우 높음</span>
          </div>
          <div class="flex justify-between items-center gap-xs md:gap-sm bg-surface-container-low p-sm rounded-xl border border-outline-variant/30 scale-btn-container">
            <button type="button" class="scale-btn flex-1 py-sm rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-primary font-headline-sm border-2 border-transparent">1</button>
            <div class="w-px h-6 bg-outline-variant/30 hidden md:block"></div>
            <button type="button" class="scale-btn flex-1 py-sm rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-primary font-headline-sm border-2 border-transparent">2</button>
            <div class="w-px h-6 bg-outline-variant/30 hidden md:block"></div>
            <button type="button" class="scale-btn flex-1 py-sm rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-primary font-headline-sm border-2 border-transparent">3</button>
            <div class="w-px h-6 bg-outline-variant/30 hidden md:block"></div>
            <button type="button" class="scale-btn flex-1 py-sm rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-primary font-headline-sm border-2 border-transparent">4</button>
            <div class="w-px h-6 bg-outline-variant/30 hidden md:block"></div>
            <button type="button" class="scale-btn flex-1 py-sm rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-primary font-headline-sm border-2 border-transparent">5</button>
          </div>
        </div>
      </div>

      <!-- Q4: Prior Experience -->
      <div class="flex flex-col gap-sm question-block" data-type="choice" data-title="이전에 심리 상담을 받아본 경험이 있으신가요?">
        <label class="font-bold text-[18px] text-on-surface flex items-start gap-sm leading-relaxed">
          <span class="text-primary font-bold text-[18px]">4.</span>
          이전에 심리 상담을 받아본 경험이 있으신가요?
        </label>
        <div class="ml-[28px] mt-sm flex flex-col gap-sm">
          <label class="cursor-pointer w-full flex items-center gap-md py-sm px-md rounded-2xl border border-outline-variant/30 bg-surface-container-lowest hover:bg-surface-container-low transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5">
            <input class="peer sr-only" name="prior_exp" type="radio" value="예" required>
            <div class="w-6 h-6 rounded-full border border-outline-variant/60 bg-white flex items-center justify-center text-label-sm font-semibold transition-all peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary">
              1
            </div>
            <span class="font-normal text-[15px] leading-normal text-on-surface-variant peer-checked:text-primary peer-checked:font-medium">
              예
            </span>
          </label>
          <label class="cursor-pointer w-full flex items-center gap-md py-sm px-md rounded-2xl border border-outline-variant/30 bg-surface-container-lowest hover:bg-surface-container-low transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5">
            <input class="peer sr-only" name="prior_exp" type="radio" value="아니오" required>
            <div class="w-6 h-6 rounded-full border border-outline-variant/60 bg-white flex items-center justify-center text-label-sm font-semibold transition-all peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary">
              2
            </div>
            <span class="font-normal text-[15px] leading-normal text-on-surface-variant peer-checked:text-primary peer-checked:font-medium">
              아니오
            </span>
          </label>
        </div>
      </div>
    `;
  }

  // 모든 scale-btn-container에 대해 척도형 버튼 인터랙션 바인딩
  const scaleContainers = DOM.dynamicQuestionsContainer.querySelectorAll(".scale-btn-container");
  scaleContainers.forEach(container => {
    const btns = container.querySelectorAll(".scale-btn");
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        btns.forEach(b => {
          b.classList.remove("bg-primary-container", "text-on-primary-container", "border-primary/20", "active");
        });
        btn.classList.add("bg-primary-container", "text-on-primary-container", "border-primary/20", "active");
      });
    });
  });
}

// 설문지 답변 수집 후 데이터 최종 제출
async function submitQuestionnaireAnswers(e) {
  if (e) e.preventDefault();
  const container = DOM.dynamicQuestionsContainer;
  const blocks = container.querySelectorAll(".question-block");
  const answers = [];
  let allAnswered = true;

  blocks.forEach(block => {
    const qTitle = block.dataset.title;
    const qType = block.dataset.type;
    let answerVal = "";

    if (qType === "text") {
      const input = block.querySelector("input");
      const textarea = block.querySelector("textarea");
      if (input) answerVal = input.value.trim();
      else if (textarea) answerVal = textarea.value.trim();
    } else if (qType === "choice") {
      const checked = block.querySelector("input[type='radio']:checked");
      if (checked) {
        answerVal = checked.value;
      }
    } else if (qType === "scale") {
      const activeBtn = block.querySelector(".scale-btn.active");
      if (activeBtn) {
        answerVal = activeBtn.textContent.trim();
      }
    }

    if (!answerVal) {
      allAnswered = false;
    }

    answers.push({
      question: qTitle,
      answer: answerVal
    });
  });

  if (!allAnswered) {
    showToast("모든 설문 항목에 기입/선택을 마쳐주세요.", "error");
    return;
  }

  try {
    if (currentRecordId) {
      await dbSubmitRecordAnswers(currentRecordId, answers);
    } else {
      await dbAddRecord(
        currentClient.id,
        currentClient.name,
        currentClient.birthDate,
        selectedCounselingType.id,
        selectedCounselingType.title,
        answers
      );
    }
    showView("client-success");
  } catch (error) {
    console.error(error);
    showToast("제출 도중 오류가 발생했습니다. 다시 시도해 주세요.", "error");
  }
}

// 신청 완료 카운트다운 타이머
function startSuccessCountdown() {
  if (countdownTimer) clearInterval(countdownTimer);
  
  let leftSec = 5;
  DOM.countdownTimerDisplay.textContent = leftSec;
  
  DOM.successProgressBar.style.width = "100%";
  
  // 스티치 테일윈드 진행바 애니메이션
  DOM.successProgressBar.style.transition = "width 5000ms linear";
  setTimeout(() => {
    DOM.successProgressBar.style.width = "0%";
  }, 50);

  countdownTimer = setInterval(() => {
    leftSec--;
    DOM.countdownTimerDisplay.textContent = leftSec;
    if (leftSec <= 0) {
      clearInterval(countdownTimer);
      showView("client-login");
    }
  }, 1000);
}

// ============================================================================
// 6. 관리자용 핵심 기능 개발
// ============================================================================

// 관리자 로그인
function handleAdminLogin(e) {
  if (e) e.preventDefault();
  const username = DOM.adminUsername.value.trim();
  const password = DOM.adminPassword.value.trim();

  if (username === "admin" && password === "1q2w3e4r!") {
    sessionStorage.setItem("crm_admin_logged", "true");
    showToast("관리자 대시보드 로그인 완료", "success");
    showView("admin-dashboard");
  } else {
    showToast("아이디 또는 패스워드가 다릅니다.", "error");
  }
}

// 관리자 로그아웃
function handleAdminLogout() {
  sessionStorage.removeItem("crm_admin_logged");
  showToast("로그아웃 완료", "success");
  showView("admin-login");
}

// 대시보드 리로드
async function refreshAdminDashboard() {
  if (activeTab === "clients") {
    await renderClientDirectory();
  } else if (activeTab === "counseling") {
    await renderCounselingManagementGrid();
  }
}

// [탭 1] 내담자 디렉토리 렌더링
async function renderClientDirectory() {
  const clients = await dbGetClients();
  const records = await dbGetRecords();
  const queryText = DOM.searchClient.value.toLowerCase().trim();

  // 대시보드 카드 지표 계산
  DOM.statTotalClients.textContent = clients.length;
  DOM.statPendingSessions.textContent = records.filter(r => r.status === "Pending").length;
  
  const startOfToday = new Date().setHours(0,0,0,0);
  const completedTodayCount = records.filter(r => r.status === "Completed" && r.submittedAt >= startOfToday).length;
  DOM.statCompletedSessions.textContent = completedTodayCount;

  // 검색 적용
  const filtered = clients.filter(c => 
    c.name.toLowerCase().includes(queryText) || 
    c.birthDate.includes(queryText)
  );

  DOM.clientListTableBody.innerHTML = "";

  if (filtered.length === 0) {
    DOM.clientListTableBody.innerHTML = `
      <tr>
        <td colspan="5" class="py-md px-md text-center text-on-surface-variant/40">
          검색된 내담자 정보가 없습니다.
        </td>
      </tr>
    `;
    return;
  }

  filtered.forEach(client => {
    const clientRecords = records.filter(r => r.clientId === client.id);
    const latest = clientRecords[0] || null;

    const tr = document.createElement("tr");
    tr.className = "hover:bg-surface-container-low/50 transition-colors group cursor-pointer border-b border-surface-container-low";
    
    // 생년월일 포맷팅
    const birthStr = client.birthDate.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
    
    // 등록일 포맷팅
    const regDateStr = new Date(client.createdAt).toLocaleDateString("ko-KR", {
      year: "numeric", month: "2-digit", day: "2-digit"
    });

    // 상태 배지 매핑
    let badgeClass = "bg-surface-container-high text-on-surface-variant";
    let statusKo = "미접수";
    
    if (latest) {
      if (latest.status === "Pending") {
        badgeClass = "bg-amber-100 text-amber-700";
        statusKo = "대기중";
      } else if (latest.status === "In Progress") {
        badgeClass = "bg-blue-100 text-blue-700";
        statusKo = "진행중";
      } else if (latest.status === "Completed") {
        badgeClass = "bg-green-100 text-green-700";
        statusKo = "완료";
      }
    }

    const initials = getInitials(client.name);

    tr.innerHTML = `
      <td class="py-md px-md">
        <div class="flex items-center gap-sm">
          <div class="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-md text-label-md">
            ${initials}
          </div>
          <span class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">${client.name}</span>
        </div>
      </td>
      <td class="py-md px-md text-on-surface-variant">${birthStr}</td>
      <td class="py-md px-md text-on-surface-variant">${regDateStr}</td>
      <td class="py-md px-md">
        <div class="flex flex-col gap-xs">
          ${clientRecords.length > 0 
            ? clientRecords.map(r => `
                <div class="h-6 flex items-center">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-md bg-surface-container-high text-on-surface-variant text-[11px] font-medium leading-none whitespace-nowrap">
                    ${r.counselingTitle}
                  </span>
                </div>
              `).join("")
            : '<div class="h-6 flex items-center"><span class="text-on-surface-variant/40 text-label-sm">없음</span></div>'
          }
        </div>
      </td>
      <td class="py-md px-md text-right">
        <div class="flex flex-col gap-xs items-end">
          ${clientRecords.length > 0 
            ? clientRecords.map(r => {
                let currentBadgeClass = "bg-surface-container-high text-on-surface-variant";
                let currentStatusKo = "미접수";
                if (r.status === "Pending") {
                  currentBadgeClass = "bg-amber-100 text-amber-700";
                  currentStatusKo = "대기중";
                } else if (r.status === "In Progress") {
                  currentBadgeClass = "bg-blue-100 text-blue-700";
                  currentStatusKo = "진행중";
                } else if (r.status === "Completed") {
                  currentBadgeClass = "bg-green-100 text-green-700";
                  currentStatusKo = "완료";
                }
                return `
                  <div class="h-6 flex items-center">
                    <span class="inline-flex items-center px-sm py-xs rounded-full ${currentBadgeClass} text-[10px] font-semibold leading-none whitespace-nowrap">
                      ${currentStatusKo}
                    </span>
                  </div>
                `;
              }).join("")
            : '<div class="h-6 flex items-center"><span class="inline-flex items-center px-sm py-xs rounded-full bg-surface-container-high text-on-surface-variant text-[10px] font-semibold leading-none">미접수</span></div>'
          }
        </div>
      </td>
    `;

    tr.addEventListener("click", () => {
      openClientDrawer(client);
    });

    DOM.clientListTableBody.appendChild(tr);
  });
}

// [질문 에디터] 렌더링 헬퍼
function renderQuestionEditorList(listEl, state) {
  listEl.innerHTML = "";
  
  if (state.length === 0) {
    listEl.innerHTML = `
      <p class="no-questions-msg text-center text-on-surface-variant/40 py-8 text-body-sm">
        추가된 질문이 없습니다. 손님은 기본 질문지(4문항)에 답변하게 됩니다.
      </p>
    `;
    return;
  }

  state.forEach((q, qIdx) => {
    const qCard = document.createElement("div");
    qCard.className = "p-md bg-surface-container-lowest rounded-xl border border-outline-variant/30 relative flex flex-col gap-sm shadow-sm";
    
    // 삭제 버튼 (우측 상단 쓰레기통)
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "absolute top-md right-md p-1 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-full transition-colors";
    deleteBtn.innerHTML = `<span class="material-symbols-outlined text-[18px]">delete</span>`;
    deleteBtn.addEventListener("click", () => {
      state.splice(qIdx, 1);
      renderQuestionEditorList(listEl, state);
    });
    qCard.appendChild(deleteBtn);

    // 질문 유형 레이블
    const typeLabel = document.createElement("span");
    typeLabel.className = "text-label-sm font-label-sm text-primary uppercase tracking-wide";
    typeLabel.textContent = q.type === "choice" ? "객관식 질문" : "주관식 질문";
    qCard.appendChild(typeLabel);

    // 질문 내용 입력창
    const qInputContainer = document.createElement("div");
    qInputContainer.className = "relative mr-[32px]";
    const qInput = document.createElement("input");
    qInput.type = "text";
    qInput.className = "w-full bg-primary/5 border border-outline-variant/40 rounded-lg px-md py-sm font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary";
    qInput.placeholder = "질문을 입력하세요";
    qInput.value = q.title;
    qInput.required = true;
    qInput.addEventListener("input", (e) => {
      q.title = e.target.value;
    });
    qInputContainer.appendChild(qInput);
    qCard.appendChild(qInputContainer);

    if (q.type === "choice") {
      // 옵션 리스트 컨테이너
      const optionsContainer = document.createElement("div");
      optionsContainer.className = "flex flex-col gap-xs mt-xs pl-sm border-l-2 border-outline-variant/30";
      
      q.options.forEach((opt, optIdx) => {
        const optRow = document.createElement("div");
        optRow.className = "flex items-center gap-xs";
        
        optRow.innerHTML = `
          <span class="material-symbols-outlined text-on-surface-variant/40 text-[18px]">radio_button_unchecked</span>
        `;
        
        const optInput = document.createElement("input");
        optInput.type = "text";
        optInput.className = "flex-grow bg-transparent border-b border-outline-variant/30 focus:border-primary focus:outline-none py-xs px-1 text-body-sm font-body-sm text-on-surface";
        optInput.value = opt;
        optInput.placeholder = `옵션 ${optIdx + 1}`;
        optInput.required = true;
        optInput.addEventListener("input", (e) => {
          q.options[optIdx] = e.target.value;
        });
        optRow.appendChild(optInput);

        // 옵션 삭제 단추 (2개 초과일 때만 가능)
        if (q.options.length > 2) {
          const delOptBtn = document.createElement("button");
          delOptBtn.type = "button";
          delOptBtn.className = "p-xs text-on-surface-variant hover:text-error transition-colors";
          delOptBtn.innerHTML = `<span class="material-symbols-outlined text-[16px]">close</span>`;
          delOptBtn.addEventListener("click", () => {
            q.options.splice(optIdx, 1);
            renderQuestionEditorList(listEl, state);
          });
          optRow.appendChild(delOptBtn);
        }
        optionsContainer.appendChild(optRow);
      });

      // 옵션 추가 단추 (최대 5개 제한)
      if (q.options.length < 5) {
        const addOptBtn = document.createElement("button");
        addOptBtn.type = "button";
        addOptBtn.className = "self-start text-label-sm font-label-sm text-primary hover:text-surface-tint mt-1 flex items-center gap-xs transition-colors";
        addOptBtn.innerHTML = `<span class="material-symbols-outlined text-[16px]">add</span> 옵션 추가 (최대 5개)`;
        addOptBtn.addEventListener("click", () => {
          q.options.push(`옵션 ${q.options.length + 1}`);
          renderQuestionEditorList(listEl, state);
        });
        optionsContainer.appendChild(addOptBtn);
      }

      qCard.appendChild(optionsContainer);
    } else {
      // 주관식 미리보기
      const preview = document.createElement("div");
      preview.className = "bg-surface-container-low p-md rounded-lg border border-outline-variant/20 text-on-surface-variant/40 text-body-sm italic mt-xs";
      preview.textContent = "클라이언트가 답변을 입력하는 영역입니다.";
      qCard.appendChild(preview);
    }

    listEl.appendChild(qCard);
  });
}

// [탭 2] 심리상담 종류 관리 그리드 렌더링
async function renderCounselingManagementGrid() {
  const types = await dbGetCounselingTypes(false);
  
  DOM.counselingManagementGrid.innerHTML = "";

  if (types.length === 0) {
    DOM.counselingManagementGrid.innerHTML = `<div class="col-span-12 text-center text-on-surface-variant/40 py-10">등록된 프로그램 종류가 없습니다.</div>`;
    return;
  }

  types.forEach(item => {
    const card = document.createElement("div");
    card.className = `col-span-12 lg:col-span-6 2xl:col-span-4 group relative flex flex-col bg-surface-container-lowest rounded-2xl p-md hover:shadow-xl transition-all duration-500 overflow-hidden before:absolute before:inset-0 before:border before:border-outline-variant/20 before:rounded-2xl hover:before:border-primary/30 ${!item.isActive ? 'opacity-70 grayscale-[0.2]' : ''}`;
    
    const icon = iconMapping[item.title] || "spa";

    card.innerHTML = `
      <!-- Decorative gradient blob -->
      <div class="absolute -top-12 -right-12 w-40 h-40 bg-primary-container/20 rounded-full blur-2xl group-hover:bg-primary-container/40 transition-colors duration-500 pointer-events-none"></div>
      <div class="flex items-start justify-between mb-md relative z-10">
        <div class="flex items-center gap-md">
          <div class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
            <span class="material-symbols-outlined text-[24px]">${icon}</span>
          </div>
          <div>
            <h3 class="font-headline-sm text-on-surface">${item.title}</h3>
            <span class="font-label-sm text-on-surface-variant">${item.questions && item.questions.length > 0 ? `설문 문항 ${item.questions.length}개` : '기본 설문(4문항)'}</span>
          </div>
        </div>
        <!-- 토글 스위치 -->
        <label class="relative inline-flex items-center cursor-pointer">
          <input class="sr-only peer toggle-active-switch" type="checkbox" ${item.isActive ? 'checked' : ''}>
          <div class="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
        </label>
      </div>
      <p class="font-body-md text-on-surface-variant flex-grow mb-lg relative z-10 line-clamp-3">
        ${item.description}
      </p>
      <div class="flex items-center justify-between pt-md border-t border-outline-variant/20 relative z-10 mt-auto">
        <div class="flex items-center gap-2">
          ${item.isActive 
            ? '<span class="material-symbols-outlined text-primary text-[16px]">check_circle</span><span class="font-label-sm text-primary">노출 중</span>' 
            : '<span class="material-symbols-outlined text-outline text-[16px]">info</span><span class="font-label-sm text-outline">숨김 처리됨</span>'}
        </div>
        <div class="flex gap-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button class="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors btn-edit-service" title="Edit">
            <span class="material-symbols-outlined text-[18px]">edit</span>
          </button>
          <button class="w-8 h-8 rounded-full bg-error-container/30 hover:bg-error-container flex items-center justify-center text-error transition-colors btn-delete-service" title="Delete">
            <span class="material-symbols-outlined text-[18px]">delete</span>
          </button>
        </div>
      </div>
    `;

    // 노출/비노출 토글
    card.querySelector(".toggle-active-switch").addEventListener("change", async (e) => {
      await dbToggleCounselingTypeActive(item.id, e.target.checked);
      showToast(`${item.title} 노출 상태가 수정되었습니다.`);
      refreshAdminDashboard();
    });

    // 수정 버튼 클릭
    card.querySelector(".btn-edit-service").addEventListener("click", () => {
      DOM.editCounselingId.value = item.id;
      DOM.editCounselingTitle.value = item.title;
      DOM.editCounselingDesc.value = item.description;
      editQuestionsState = JSON.parse(JSON.stringify(item.questions || []));
      renderQuestionEditorList(DOM.editQuestionsList, editQuestionsState);
      DOM.editServiceModal.classList.remove("hidden");
    });

    // 삭제 버튼 클릭
    card.querySelector(".btn-delete-service").addEventListener("click", async () => {
      if (confirm(`'${item.title}' 상담 프로그램을 영구 삭제하시겠습니까?`)) {
        await dbDeleteCounselingType(item.id);
        showToast("성공적으로 삭제되었습니다.");
        refreshAdminDashboard();
      }
    });

    DOM.counselingManagementGrid.appendChild(card);
  });
}

// ============================================================================
// 7. 내담자 상세 기록 Drawer 제어
// ============================================================================
async function openClientDrawer(client) {
  currentDrawerClient = client;

  DOM.drawerClientName.textContent = client.name;
  DOM.drawerClientBirth.textContent = client.birthDate.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
  DOM.drawerClientRegdate.textContent = new Date(client.createdAt).toLocaleDateString("ko-KR");
  DOM.drawerAvatar.textContent = getInitials(client.name);

  // 연락처/생년월일 인풋 필드 기입
  if (DOM.drawerInputPhone) DOM.drawerInputPhone.value = client.phone || "";
  if (DOM.drawerInputBirth) DOM.drawerInputBirth.value = client.birthDate || "";

  // 배정 폼의 정보 기입
  DOM.formAssignCounseling.dataset.clientId = client.id;
  DOM.formAssignCounseling.dataset.clientName = client.name;
  DOM.formAssignCounseling.dataset.clientBirth = client.birthDate;

  // 배정 옵션 삽입
  const types = await dbGetCounselingTypes(true);
  DOM.assignCounselingSelect.innerHTML = types.map(t => `<option value="${t.id}">${t.title}</option>`).join("");

  // 역사 타임라인 렌더링
  await renderClientHistoryTimeline(client.id);

  // Drawer 오픈 전역 JS 함수 호출
  window.openDrawer();
}

async function renderClientHistoryTimeline(clientId) {
  const records = await dbGetRecords();
  const clientRecords = records.filter(r => r.clientId === clientId);
  const counselingTypes = await dbGetCounselingTypes();

  DOM.drawerHistoryList.innerHTML = "";

  if (clientRecords.length === 0) {
    DOM.drawerHistoryList.innerHTML = `<div class="text-center py-6 text-on-surface-variant/40">과거 상담 신청 내역이 없습니다.</div>`;
    return;
  }

  clientRecords.forEach(rec => {
    const item = document.createElement("div");
    item.className = "relative pl-md pb-4";

    const dateStr = new Date(rec.submittedAt).toLocaleDateString("ko-KR") + " " +
                    new Date(rec.submittedAt).toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", hour12: false });

    // 답변 출력 블록 구성
    let answersHtml = "";
    if (rec.answers && rec.answers.length > 0) {
      const qLines = rec.answers.map(ans => {
        let displayAnswer = ans.answer || "(미답변)";

        // counselingTypeId와 매칭하여 질문의 보기(options) 텍스트 조회
        const cType = counselingTypes.find(t => t.id === rec.counselingTypeId);
        if (cType && cType.questions) {
          const matchedQ = cType.questions.find(q => q.title === ans.question);
          if (matchedQ && matchedQ.type === "choice" && matchedQ.options) {
            // Case A: 답변이 단일 숫자(예: "1", "2")인 경우 매핑 진행
            if (/^[1-9]\d*$/.test(displayAnswer)) {
              const optIdx = parseInt(displayAnswer) - 1;
              if (matchedQ.options[optIdx]) {
                displayAnswer = `${displayAnswer}. ${matchedQ.options[optIdx]}`;
              }
            } else {
              // Case B: 답변이 이미 텍스트로 저장되어 있는 경우, 보기 리스트에서의 번호를 찾아서 접두사 결합
              const optIdx = matchedQ.options.indexOf(displayAnswer);
              if (optIdx !== -1) {
                displayAnswer = `${optIdx + 1}. ${displayAnswer}`;
              }
            }
          }
        }

        return `
          <div class="text-xs bg-surface-container-lowest p-sm rounded border border-outline-variant/20 mb-xs">
            <div class="font-semibold text-primary">Q. ${ans.question}</div>
            <div class="text-on-surface mt-xs pl-xs border-l-2 border-primary/20">${displayAnswer}</div>
          </div>
        `;
      }).join("");

      answersHtml = `
        <div class="mt-md pt-md border-t border-surface-container-high/60">
          <div class="text-[13px] font-bold text-on-surface mb-sm flex items-center gap-xs">
            <span class="material-symbols-outlined text-[16px] text-primary">assignment</span>
            <span>답변 내용 요약</span>
          </div>
          ${qLines}
        </div>
      `;
    }

    item.innerHTML = `
      <div class="absolute w-3 h-3 ${rec.status === 'Completed' ? 'bg-primary' : 'bg-surface-container-high'} rounded-full -left-[7px] top-1.5 ring-4 ring-surface-container-lowest"></div>
      <div class="bg-surface p-md rounded-2xl border border-surface-container-high">
        <div class="flex justify-between items-start mb-sm">
          <div>
            <h4 class="font-headline-sm text-headline-sm text-on-surface">${rec.counselingTitle}</h4>
            <span class="font-label-sm text-label-sm text-on-surface-variant">신청 일시: ${dateStr}</span>
          </div>
          <!-- 진행 상태 조정 및 기록 삭제 영역 -->
          <div class="flex items-center gap-xs">
            <select class="status-changer select-dropdown text-xs bg-white border border-outline-variant/50 rounded-lg px-2 py-1 focus:outline-none" data-record-id="${rec.id}">
              <option value="Pending" ${rec.status === 'Pending' ? 'selected' : ''}>대기중</option>
              <option value="In Progress" ${rec.status === 'In Progress' ? 'selected' : ''}>진행중</option>
              <option value="Completed" ${rec.status === 'Completed' ? 'selected' : ''}>완료</option>
            </select>
            <button class="btn-delete-record p-1 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-full transition-colors" data-record-id="${rec.id}" title="기록 삭제">
              <span class="material-symbols-outlined text-[18px]">delete</span>
            </button>
          </div>
        </div>
        ${answersHtml}
      </div>
    `;

    // 상태 값 변경 감지
    item.querySelector(".status-changer").addEventListener("change", async (e) => {
      const nextStatus = e.target.value;
      await dbUpdateRecordStatus(rec.id, nextStatus);
      showToast("상담 진행 상태를 갱신했습니다.");
      
      // 대시보드 새로고침 및 타임라인 새로고침
      refreshAdminDashboard();
      renderClientHistoryTimeline(clientId);
    });

    // 상담 이력 카드 삭제 감지
    item.querySelector(".btn-delete-record").addEventListener("click", async () => {
      if (confirm("이 내담자의 해당 상담 신청 기록을 삭제하시겠습니까?")) {
        await dbDeleteRecord(rec.id);
        showToast("상담 기록이 삭제되었습니다.");
        refreshAdminDashboard();
        renderClientHistoryTimeline(clientId);
      }
    });

    DOM.drawerHistoryList.appendChild(item);
  });
}

// 관리자가 내담자에게 새로운 상담 수동 배정
async function handleAssignCounseling() {
  const clientId = DOM.formAssignCounseling.dataset.clientId;
  const clientName = DOM.formAssignCounseling.dataset.clientName;
  const clientBirth = DOM.formAssignCounseling.dataset.clientBirth;

  const select = DOM.assignCounselingSelect;
  const selectedOption = select.options[select.selectedIndex];
  if (!selectedOption) {
    showToast("배정할 상담을 하나 선택해주세요.", "error");
    return;
  }

  const typeId = selectedOption.value;
  const typeTitle = selectedOption.text;

  await dbAddRecord(clientId, clientName, clientBirth, typeId, typeTitle);
  showToast(`'${typeTitle}' 프로그램이 배정되었습니다.`);

  refreshAdminDashboard();
  renderClientHistoryTimeline(clientId);
}

// ============================================================================
// 8. 모달창 리스너 연결
// ============================================================================
function registerEventListeners() {
  if (DOM.btnCloseBanner) {
    DOM.btnCloseBanner.addEventListener("click", () => {
      DOM.firebaseNoticeBanner.classList.add("hidden");
    });
  }

  // 핸드폰 번호 포맷 기입 리스너
  DOM.registerPhone.addEventListener("input", (e) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 11) val = val.slice(0, 11);
    if (val.length >= 3 && val.length < 7) {
      val = val.slice(0, 3) + "-" + val.slice(3);
    } else if (val.length >= 7) {
      val = val.slice(0, 3) + "-" + val.slice(3, 7) + "-" + val.slice(7);
    }
    e.target.value = val;
  });

  // 고객 로그인 버튼
  DOM.formClientLogin.addEventListener("submit", handleClientLogin);

  // 답변 작성하기 (질문지 화면 진입)
  DOM.btnClientSubmit.addEventListener("click", () => {
    showView("client-questionnaire");
  });

  // 질문지 뒤로가기
  DOM.btnQuestionnaireBack.addEventListener("click", () => {
    showView("client-select");
  });

  // 질문지 최종 제출
  DOM.formClientQuestionnaire.addEventListener("submit", submitQuestionnaireAnswers);


  // 처음 화면으로 (로그아웃)
  if (DOM.btnClientLogout) {
    DOM.btnClientLogout.addEventListener("click", () => {
      currentClient = null;
      selectedCounselingType = null;
      currentRecordId = null;
      showView("client-login");
    });
  }

  DOM.btnSuccessHome.addEventListener("click", () => {
    if (countdownTimer) clearInterval(countdownTimer);
    currentClient = null;
    selectedCounselingType = null;
    currentRecordId = null;
    showView("client-login");
  });

  // 관리자 이동 버튼 클릭
  DOM.btnGotoAdmin.addEventListener("click", () => {
    if (sessionStorage.getItem("crm_admin_logged") === "true") {
      showView("admin-dashboard");
    } else {
      showView("admin-login");
    }
  });

  // 관리자 로그인 창 -> 손님 로그인 페이지로 돌아가기
  DOM.btnAdminLoginBack.addEventListener("click", () => {
    showView("client-login");
  });

  // 관리자 로그인 시도
  DOM.formAdminLogin.addEventListener("submit", handleAdminLogin);

  // 관리자 로그아웃
  DOM.btnAdminLogout.addEventListener("click", handleAdminLogout);

  // 관리자 새로고침
  const btnAdminRefresh = document.getElementById("btn-admin-refresh");
  if (btnAdminRefresh) {
    btnAdminRefresh.addEventListener("click", () => {
      refreshAdminDashboard();
      showToast("대시보드가 새로고침되었습니다.");
    });
  }

  // 관리자 탭 메뉴 전환
  DOM.navClients.addEventListener("click", () => {
    DOM.navClients.className = "w-full flex items-center px-md py-sm rounded-xl bg-primary-container text-on-primary-container font-semibold transition-all group";
    DOM.navCounseling.className = "w-full flex items-center px-md py-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high/50 hover:text-on-surface transition-all group";
    DOM.tabClients.classList.remove("hidden");
    DOM.tabCounseling.classList.add("hidden");
    activeTab = "clients";
    refreshAdminDashboard();
  });

  DOM.navCounseling.addEventListener("click", () => {
    DOM.navClients.className = "w-full flex items-center px-md py-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high/50 hover:text-on-surface transition-all group";
    DOM.navCounseling.className = "w-full flex items-center px-md py-sm rounded-xl bg-primary-container text-on-primary-container font-semibold transition-all group";
    DOM.tabClients.classList.add("hidden");
    DOM.tabCounseling.classList.remove("hidden");
    activeTab = "counseling";
    refreshAdminDashboard();
  });

  // 내담자 실시간 이름 검색
  DOM.searchClient.addEventListener("input", renderClientDirectory);

  // 내담자 등록 모달 열기/닫기
  DOM.btnOpenRegisterModal.addEventListener("click", () => {
    DOM.registerName.value = "";
    DOM.registerBirth.value = "";
    DOM.registerPhone.value = "";
    DOM.registerModal.classList.remove("hidden");
  });

  const closeRegisterModal = () => {
    DOM.registerModal.classList.add("hidden");
  };
  document.querySelectorAll(".btn-close-register").forEach(btn => btn.addEventListener("click", closeRegisterModal));
  DOM.btnCloseRegisterOverlay.addEventListener("click", closeRegisterModal);

  // 내담자 등록 제출
  DOM.formRegisterClient.addEventListener("submit", async (e) => {
    if (e) e.preventDefault();
    const name = DOM.registerName.value.trim();
    const birth = DOM.registerBirth.value.trim().replace(/-/g, "");
    const phone = DOM.registerPhone.value.trim();

    if (birth.length !== 8 || isNaN(birth)) {
      showToast("생년월일(8자리)을 올바르게 기입해 주세요.", "error");
      return;
    }
    
    if (phone.length < 10) {
      showToast("올바른 연락처를 기입해 주세요.", "error");
      return;
    }

    await dbAddClient(name, birth, phone);
    closeRegisterModal();
    showToast("신규 내담자가 등록되었습니다.");
    refreshAdminDashboard();
  });

  // 상담 프로그램 신규 등록 모달 열기/닫기
  DOM.btnOpenCounselingModal.addEventListener("click", () => {
    DOM.addCounselingTitle.value = "";
    DOM.addCounselingDesc.value = "";
    addQuestionsState = [];
    renderQuestionEditorList(DOM.addQuestionsList, addQuestionsState);
    DOM.addServiceModal.classList.remove("hidden");
  });

  const closeServiceModal = () => {
    DOM.addServiceModal.classList.add("hidden");
  };
  document.querySelectorAll(".btn-close-service").forEach(btn => btn.addEventListener("click", closeServiceModal));
  DOM.btnCloseServiceOverlay.addEventListener("click", closeServiceModal);

  // 질문 에디터 추가 리스너 (신규 등록)
  DOM.btnAddChoiceQ.addEventListener("click", () => {
    addQuestionsState.push({
      type: "choice",
      title: "",
      options: ["옵션 1", "옵션 2"]
    });
    renderQuestionEditorList(DOM.addQuestionsList, addQuestionsState);
  });

  DOM.btnAddTextQ.addEventListener("click", () => {
    addQuestionsState.push({
      type: "text",
      title: ""
    });
    renderQuestionEditorList(DOM.addQuestionsList, addQuestionsState);
  });

  // 질문 에디터 추가 리스너 (수정 등록)
  DOM.btnEditAddChoiceQ.addEventListener("click", () => {
    editQuestionsState.push({
      type: "choice",
      title: "",
      options: ["옵션 1", "옵션 2"]
    });
    renderQuestionEditorList(DOM.editQuestionsList, editQuestionsState);
  });

  DOM.btnEditAddTextQ.addEventListener("click", () => {
    editQuestionsState.push({
      type: "text",
      title: ""
    });
    renderQuestionEditorList(DOM.editQuestionsList, editQuestionsState);
  });

  // 상담 프로그램 등록 제출
  DOM.formAddCounseling.addEventListener("submit", async (e) => {
    if (e) e.preventDefault();
    const title = DOM.addCounselingTitle.value.trim();
    const desc = DOM.addCounselingDesc.value.trim();

    await dbAddCounselingType(title, desc, addQuestionsState);
    closeServiceModal();
    showToast("새 상담 프로그램이 등록되었습니다.");
    refreshAdminDashboard();
  });

  // 상담 프로그램 수정 완료 제출
  DOM.formEditCounseling.addEventListener("submit", async (e) => {
    if (e) e.preventDefault();
    const id = DOM.editCounselingId.value;
    const title = DOM.editCounselingTitle.value.trim();
    const desc = DOM.editCounselingDesc.value.trim();

    await dbUpdateCounselingType(id, title, desc, editQuestionsState);
    DOM.editServiceModal.classList.add("hidden");
    showToast("정상 수정 완료되었습니다.");
    refreshAdminDashboard();
  });

  // 수동 배정 제출
  DOM.formAssignCounseling.addEventListener("submit", async (e) => {
    if (e) e.preventDefault();
    await handleAssignCounseling();
  });

  // 내담자 정보 수정 저장
  const btnSaveClientInfo = document.getElementById("btn-save-client-info");
  if (btnSaveClientInfo) {
    btnSaveClientInfo.addEventListener("click", async () => {
      if (!currentDrawerClient) return;
      const updatedPhone = DOM.drawerInputPhone.value.trim();
      const updatedBirth = DOM.drawerInputBirth.value.trim().replace(/[^0-9]/g, "");

      if (updatedBirth.length !== 8) {
        showToast("생년월일은 8자리 숫자(예: 19900101)로 입력해주세요.", "error");
        return;
      }

      await dbUpdateClientInfo(currentDrawerClient.id, updatedPhone, updatedBirth);
      showToast("내담자 인적사항이 수정되었습니다.");

      // 로컬 정보 동기화 및 텍스트 갱신
      currentDrawerClient.phone = updatedPhone;
      currentDrawerClient.birthDate = updatedBirth;
      DOM.drawerClientBirth.textContent = updatedBirth.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");

      // 대시보드 새로고침
      refreshAdminDashboard();
    });
  }

  // 내담자 삭제
  const btnDeleteClient = document.getElementById("btn-delete-client");
  if (btnDeleteClient) {
    btnDeleteClient.addEventListener("click", async () => {
      if (!currentDrawerClient) return;
      if (!confirm(`${currentDrawerClient.name} 내담자를 정말로 삭제하시겠습니까?\n해당 내담자의 모든 상담 기록도 함께 삭제됩니다.`)) {
        return;
      }

      await dbDeleteClient(currentDrawerClient.id);
      showToast("내담자가 삭제되었습니다.");

      // Drawer 닫기 및 새로고침
      window.closeDrawer();
      refreshAdminDashboard();
    });
  }
}

// ============================================================================
// 9. 프로그램 실행 진입점 (Main)
// ============================================================================
async function initApp() {
  initLocalStorage();
  registerEventListeners();

  // URL 해시 변경 리스너 등록 및 초기 라우팅 감지 실행
  window.addEventListener("hashchange", handleRouting);

  if (window.isFirebaseMode) {
    await initFirebaseData();
  } else {
    if (DOM.firebaseNoticeBanner) {
      DOM.firebaseNoticeBanner.classList.remove("hidden");
    }
  }

  handleRouting();
}

document.addEventListener("DOMContentLoaded", initApp);
