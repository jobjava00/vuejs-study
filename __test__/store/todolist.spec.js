import Constant from '@/common/constant';
import todolist from '@/store/todolist.js';

describe('todolist.js', function () {
    it(Constant.ADD_TODO + ' 테스트', () => {
        todolist.mutations[Constant.ADD_TODO](todolist.state, { todo: '축구장' });
        expect(todolist.state.todolist).toHaveLength(5);
    });
});
