import { Alert, Flex } from 'antd';

type ErrorStateProps = {
  message?: string;
  description?: string;
};

export function ErrorState({
  message = 'Error',
  description = 'No se pudo completar la operación',
}: ErrorStateProps) {
  return (
    <Flex flex={1} justify="center" align="center" style={{ height: '100%', padding: 24 }}>
      <Alert title={message} description={description} type="error" showIcon />
    </Flex>
  );
}
