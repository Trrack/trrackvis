import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionIcon, Button, Center, Group, Stack, Text } from '@mantine/core';
import { State, Task } from './useTrrack';

export function Tasks({
    state,
    completeCallback,
    deleteCallback,
    addCallback,
}: {
    state: State;
    completeCallback: (task: Task) => void;
    deleteCallback: (task: Task) => void;
    addCallback: () => void;
}) {
    return (
        <Stack spacing={2}>
            {state.tasks.map((task) => {
                return (
                    <Group key={task.id} spacing={'xs'}>
                        <Text style={{ marginRight: 'auto' }}>{task.id}</Text>
                        <ActionIcon
                            onClick={() => {
                                if (!task.complete) {
                                    completeCallback(task);
                                }
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faCheck}
                                color={task.complete ? 'green' : 'lightgray'}
                            ></FontAwesomeIcon>
                        </ActionIcon>
                        <ActionIcon
                            onClick={() => {
                                if (task.complete) {
                                    completeCallback(task);
                                }
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faX}
                                color={task.complete ? 'lightgray' : 'red'}
                            ></FontAwesomeIcon>
                        </ActionIcon>
                        <ActionIcon
                            onClick={() => {
                                deleteCallback(task);
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faTrash}
                                color={'gray'}
                            ></FontAwesomeIcon>
                        </ActionIcon>
                    </Group>
                );
            })}
            <Center>
                <Button onClick={() => addCallback()}>Add</Button>
            </Center>
        </Stack>
    );
}
