export function paramValidation (joi) {

    return function (req, res, next) {
  
      // always allow validation to allow unknown fields by default.
      let options = {
        allowUnknown: true
      };
  
      let validation = req.route.spec.validation; //validation object in route
      if (!validation) {
        return next(); // skip validation if not set
      }
  
      let validProperties = ['body', 'query', 'params'];
  
      for (let i in validation) {
        if (validProperties.indexOf(i) < 0) {
          console.log('Route contains unsupported validation key');
        //  throw new Error('An unsupported validation key was set in route');
  
        } else {
          if (req[i] === undefined) {
            console.log('Empty request ' + i + ' was sent');
  
            res.send(
            //  httpStatus.BAD_REQUEST,
             // new errors.InvalidArgumentError('Missing request ' + i)
            );
            return;
          }
  
          let result = joi.validate(req[i], validation[i], options);
  
          if (result.error) {
            console.log('validation error - %s', result.error.message);
  
            res.send(
           //   httpStatus.BAD_REQUEST,
           //   new errors.InvalidArgumentError(
           //     'Invalid request ' + i + ' - ' + result.error.details[0].message
          //    )
            );
            return;
  
          } else {
            console.log('successfully validated request parameters');
          }
        }
      }
  
      next();
    };
  }