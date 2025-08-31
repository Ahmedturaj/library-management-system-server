import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodSchema } from 'zod';
import AppError from '../error/appError';

const validationRequest =
  <S extends ZodSchema<any>>(schema: S) =>
  async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const parsed = await schema.safeParseAsync(req.body);

      if (!parsed.success) {
        
        const { fieldErrors, formErrors } = parsed.error.flatten();
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: { formErrors, fieldErrors }, 
        });
      }

     
      req.body = parsed.data as any;
      return _next();
    } catch (err) {
      
      if (err instanceof ZodError) {
        const { fieldErrors, formErrors } = err.flatten();
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: { formErrors, fieldErrors },
        });
      }
      const appErr = err instanceof AppError ? err : new AppError(500, 'Internal Server Error');
      return res.status(appErr.statusCode).json({
        success: false,
        message: appErr.message,
        details: appErr.details,
      });
    }
  };

  export default validationRequest;
