import { Text } from '@/shared/components/shadcn/Text';

const TermsPage = () => {
  return (
    <div>
      <Text typography="h3">아이트래커 개인정보 수집·이용 및 제3자 제공 동의서</Text>

      <div>
        <Text>
          [아이트래커]은(는) 고객님의 개인정보를 중요하게 생각하며, 아래와 같이 제3자에게 제공하는 것에 대해 동의를
          받고자 합니다.
        </Text>

        <div className="my-4">
          <Text typography="h4">1. 개인정보를 제공받는 자</Text>
          <Text>[아이트래커]</Text>
        </div>

        <div className="my-4">
          <Text typography="h4">2. 개인정보를 제공받는 자의 개인정보 이용 목적</Text>
          <Text>
            [필수 동의항목: 프로필 사진, 닉네임, 전화번호 - iTracker 서비스 내 이용자 식별, 회원관리 및 서비스 제공]
          </Text>
        </div>

        <div className="my-4">
          <Text typography="h4">4. 개인정보를 제공받는 자의 개인정보 보유 및 이용 기간</Text>
          <Text>[제공 동의일로부터 1년]</Text>
        </div>

        <div className="my-4">
          <Text typography="h4">5. 동의 거부 권리 및 동의 거부에 따른 불이익 내용</Text>
          <Text>귀하는 개인정보 제공 동의를 거부할 권리가 있습니다.</Text>
          <Text>동의 거부 시 [특정 서비스 이용 제한] 등의 불이익이 있을 수 있습니다.</Text>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
