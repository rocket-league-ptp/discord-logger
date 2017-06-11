"use strict";

const error_to_embed = (error) => {
  return {
    embed: {
      title: error.constructor.name,
      description: '```' + error.stack + '```',
      timestamp: new Date(),
      fields: error.fields || [],
      color: 14168377,
    }
  };
}

module.exports = (channel_id, logfunc) => {
  return (error, callback) => {
    if (typeof(error) === 'object') {
      logfunc(channel_id, error_to_embed(error), callback);
    }
    else {
      logfunc(channel_id, {
        embed: {
          title: 'Debug message',
          description: error,
          color: 3233496,
          timestamp: new Date(),
        }
      }, callback);
    }
    return module.exports;
  };
};
