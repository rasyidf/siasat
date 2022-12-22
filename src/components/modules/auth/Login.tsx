import { Button, Card, Container, Group, PasswordInput, SegmentedControl, Stack, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { hashHistory } from "../../../hashHistory";

export const Login = () => {
  const [role, setRole] = useState('student');
  return (
    <Container >
      <Stack mih={"calc(100vh - 32px)"} align={'stretch'} justify={"center"}>
        <Card shadow="sm" miw={350} >
          <Group position="center" p={8}>
            <Title order={3}>Login</Title>

          </Group>
          <Stack p={16}>
            {/* Simple Login Form with Mantine.dev */}
            <TextInput label="Email" />
            <PasswordInput label="Password" />

            <SegmentedControl value={role} onChange={(v) => setRole(v)} data={[{ label: 'Student', value: 'student' }, { label: 'Parent', value: 'parent' }, { label: 'Staff', value: 'staff' }]} />

            <Button onClick={(e) => {
              e.preventDefault();

              hashHistory.push(`/${role}`);
            }}>
              Submit
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
};
