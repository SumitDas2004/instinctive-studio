export const exceptionHandlerMiddleware = (req, res, next) => {
    try {
      next();
    } catch (e) {
      if (e instanceof NotFoundException) {
        res.status(404);
        response.set({
            "Content-Type": "application/json",
          });
        res.send(
          JSON.stringify({
            message: e.message,
          })
        );
      } else {
        console.log(`${e.message} occured in ${e.stack}`);
        res.status(500);
        response.set({
            "Content-Type": "application/json",
          });
        res.send(
          JSON.stringify({
            message: "Internal server error.",
          })
        );
      }
    }
  }