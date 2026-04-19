import { useTranslation } from 'react-i18next';
import { Alert, Flex } from 'antd';

type ErrorStateProps = {
  message?: string;
  description?: string;
};

export function ErrorState({ message, description }: ErrorStateProps) {
  const { t } = useTranslation();

  const defaultMessage = t('common.error');
  const defaultDescription = t('shared.state_feedback.error_loading_data');

  return (
    <Flex flex={1} justify="center" align="center" style={{ height: '100%', padding: 24 }}>
      <Alert
        title={message || defaultMessage}
        description={description || defaultDescription}
        type="error"
        showIcon
      />
    </Flex>
  );
}
