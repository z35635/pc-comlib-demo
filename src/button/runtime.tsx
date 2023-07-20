import React, { useCallback, useEffect, } from 'react';
import { OutputIds } from './constants';
import { Data } from './types';
import { Button } from 'antd';

export default function ({ env, data, outputs, inputs }: RuntimeParams<Data>) {
  useEffect(() => {
    if (env.runtime) {
      inputs['title']((val: any) => {
        data.text = val;
      });
    }
  }, []);
  const onClick = useCallback(() => {
    if (env.runtime) {
      outputs[OutputIds.Click]();
    }
  }, []);

  const onDoubleClick = useCallback(() => {
    if (env.runtime) {
      outputs[OutputIds.DbClick]();
    }
  }, []);

  return (
    <div>
      <Button
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        type={data.type}
      >
        {data.text}
      </Button>
    </div>
  );
}
