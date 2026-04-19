import { Spin, Flex } from 'antd';

type LoadingStateProps = {
  message?: string;
};

export function LoadingState({ message = 'Cargando...' }: LoadingStateProps) {
  return (
    <Flex flex={1} justify="center" align="center" style={{ height: '100%' }}>
      <Spin size="large" description={message} />
    </Flex>
  );
}
