import React from 'react';
import { CircularProgress } from 'material-ui/Progress';
import { amber } from 'material-ui/colors';

const create = (showOn, children) => ({ showOn, children });

export const Option = ({ showOn, children }) => create(showOn, children);

export const Error = props => {
  if (!props.returnAction) return create('error', <div className="alert alert-danger">{props.msg}</div>);

  const child = (
    <div>
      <div className="alert alert-danger">{props.msg}</div>
      {
        props.returnAction ? (
          <button className="btn btn-danger" onClick={props.returnAction}>
            {props.returnMessage ? props.returnMessage : 'Return'}
          </button>
        ) : ''
      }
    </div>
  );
  return create('error', child);
};

export const Success = props => {
  if (!props.returnAction) return create('success', <div className="alert alert-success">{props.msg}</div>);

  const child = (
    <div>
      <div className="alert alert-success">{props.msg}</div>
      <button className="btn btn-success" onClick={props.returnAction}>
        {props.returnMessage ? props.returnMessage : 'Return'}
      </button>
    </div>
  );
  return create('success', child);
};

export const Waiting = ({ children }) => {
  if (children) return create('waiting', children);

  const color = Math.floor(Math.random() * 2) ? '#222' : amber[500];
  const child = (
    <div>
      <h3>We are processing your request</h3>
      <div className="flex-center">
        <CircularProgress style={{ color }} size={175} />
      </div>
    </div>
  );
  return create('waiting', child);
};

export const Default = ({ children }) => create('default', children);

export const Open = ({ children }) => create(true, children);

export const Closed = ({ children }) => create(false, children);

export const Handler = (props) => {
  let toDisplay;
  props.children.forEach(child => {
    const { showOn, children } = child.type(child.props);
    if (showOn === props.status) toDisplay = children;
  });
  return toDisplay;
};
