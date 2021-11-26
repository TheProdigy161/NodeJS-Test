import { Express } from 'express';
import { Message } from '@models/message/message.model';
import { IMessage } from '@models/message/message.interface';
import { ApiResponse } from '@models/apiResponse/apiResponse.model';

export default function (app: Express): void {
    app.get('/messages', (req, res) => {
        const messages: IMessage[] = [
            new Message({
                id: 1,
                title: 'First message',
                subtitle: 'First message subtitle.',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id fermentum ante, et mollis tortor. In varius quam eu venenatis bibendum. Integer interdum eleifend purus sit amet cursus. In quis porttitor mauris, vitae luctus nisi. Sed in neque dapibus, iaculis eros vel, commodo massa. Etiam dui enim, ultricies vel feugiat vel, aliquet vitae dui. Proin viverra leo non metus fringilla, sit amet venenatis est dapibus. Duis porttitor odio urna, consequat sodales lectus dapibus non. Nullam eu rhoncus metus. Etiam hendrerit molestie pharetra. Nullam ornare neque nunc, sed mollis quam varius in. Quisque ultrices nibh ligula, ut maximus nibh semper at. Duis facilisis et leo lobortis facilisis. Curabitur neque tellus, lacinia et dolor et, fermentum volutpat elit.',
                auditInfo: null
            }),
            new Message({
                id: 2,
                title: 'Second message',
                subtitle: 'Second message subtitle.',
                content: 'Vivamus laoreet ut nisl sit amet aliquam. Mauris massa magna, feugiat vitae elit id, rutrum consequat quam. Donec ultrices sodales leo. Donec dapibus dolor eget lorem tincidunt, suscipit dictum risus rhoncus. Aenean pretium diam vel nulla sagittis vestibulum. Quisque sit amet turpis tempor, malesuada arcu ullamcorper, euismod tellus. Fusce vitae felis ut orci dignissim dapibus malesuada vel eros. Morbi pretium, diam id elementum ullamcorper, erat nulla malesuada eros, eu tempus diam nunc ut justo. Vestibulum vitae nisi vitae nulla ullamcorper placerat.',
                auditInfo: null
            }),
            new Message({
                id: 3,
                title: 'Third message',
                subtitle: 'Third message subtitle.',
                content: 'Ut bibendum erat vitae libero eleifend pulvinar. Fusce pretium tempor neque venenatis tempus. Praesent lobortis magna nec erat fringilla, vel semper leo volutpat. Cras viverra quis lacus ut semper. Morbi tincidunt bibendum tortor nec pretium. Curabitur id sapien leo. Vestibulum vitae magna dapibus, fermentum lacus eu, venenatis ex. Nullam non enim rutrum, tincidunt neque quis, sagittis risus.',
                auditInfo: null
            }),
        ];

        res.json(new ApiResponse('Successfully got messages.', messages));
    });
    
    app.get('/messages/:id', (req, res) => {
        res.json(`Hello ${req.params.id} server`);
    });
}