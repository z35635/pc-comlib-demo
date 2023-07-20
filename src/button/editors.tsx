import { ButtonType } from 'antd/lib/button';
import { TypeEnum, OutputIds } from './constants';
import { Data } from './types';

export default {
  '@resize': {
    options: ['width', 'height']
  },
  ':root': {
    items: [
      {
        items: [
          {
            title: '文字标题',
            type: 'text',
            value: {
              get({ data }: EditorResult<Data>) {
                return data.text;
              },
              set({ data }: EditorResult<Data>, value: string) {
                data.text = value;
              }
            }
          },
          {
            title: '风格',
            type: 'Select',
            options() {
              return [
                { value: TypeEnum.Primary, label: '主按钮' },
                { value: TypeEnum.Default, label: '次按钮' },
                { value: TypeEnum.Dashed, label: '虚线按钮' },
                { value: TypeEnum.Danger, label: '危险按钮' },
                { value: TypeEnum.Link, label: '链接按钮' },
                { value: TypeEnum.Text, label: '文字按钮' }
              ];
            },
            value: {
              get({ data }: EditorResult<Data>) {
                return data.type || TypeEnum.Default;
              },
              set({ data }: EditorResult<Data>, value: ButtonType) {
                data.type = value;
              }
            },
          }
        ]
      },
      {
        title: '单击',
        type: '_Event',
        options: {
          outputId: OutputIds.Click
        }
      },
      {
        title: '双击',
        type: '_Event',
        options: {
          outputId: OutputIds.DbClick
        }
      },
    ]
  }
};
