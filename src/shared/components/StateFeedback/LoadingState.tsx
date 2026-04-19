import { Spin, Flex } from 'antd';
import { useTranslation } from 'react-i18next';

type LoadingStateProps = {
  message?: string;
};

export function LoadingState({ message }: LoadingStateProps) {
  const { t } = useTranslation();

  const defaultMessage = t('common.loading');

  return (
    <Flex flex={1} justify="center" align="center" style={{ height: '100%' }}>
      <Spin size="large" description={message || defaultMessage} />
    </Flex>
  );
}
