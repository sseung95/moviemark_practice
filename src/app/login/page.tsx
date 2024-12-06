'use client';

import Image from 'next/image';

import LoginForm from '@/components/auth/LoginForm/LoginForm';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    // 로그인 성공 시 메인 페이지로 이동
    router.push('/');
  };

  const handleLoginError = (error: Error) => {
    console.error('로그인 실패', error);
  };

  return (
    <div className="flex flex-col flex-1 h-full w-full justify-center">
      <div className="flex items-center justify-center w-full gap-[12rem]">
        <div className="flex-1">
          <Image
            src="/images/sally.png"
            alt="sally"
            width={486}
            height={584}
            className="text-white"
          />
        </div>
        <div className="flex-1">
          <LoginForm
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
          />
        </div>
      </div>
    </div>
  );
}
