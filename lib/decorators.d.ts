/**
 * @package @Grandjs
 * @author Tarek Salem
 * MIT License
 */
/**
 * ==============================================================================
 * File Role: Package Decorators
 * ==============================================================================
 */
import Router from "./Router";
import { MiddleWareInterface, CorsInterface, MiddleWareOptions } from './interfaces/index';
declare const GET: (options?: {
    url: string;
    middleWares?: MiddleWareInterface[];
    cors?: CorsInterface;
}) => (target: Router, key: string) => void;
declare const POST: (options?: {
    url: string;
    middleWares?: MiddleWareInterface[];
    cors?: CorsInterface;
}) => (target: Router, key: string) => void;
declare const PATCH: (options?: {
    url: string;
    middleWares?: MiddleWareInterface[];
    cors?: CorsInterface;
}) => (target: Router, key: string) => void;
declare const PUT: (options?: {
    url: string;
    middleWares?: MiddleWareInterface[];
    cors?: CorsInterface;
}) => (target: Router, key: string) => void;
declare const DELETE: (options?: {
    url: string;
    middleWares?: MiddleWareInterface[];
    cors?: CorsInterface;
}) => (target: Router, key: string) => void;
declare const MiddleWare: (target: Router, key: string) => void;
declare const RouteMiddleWare: (options: MiddleWareOptions) => (target: Router, key: string) => void;
declare const Use: (path: string, ...middleWares: MiddleWareInterface[]) => (constructor: Function) => void;
export { MiddleWare, GET, PUT, POST, PATCH, DELETE, RouteMiddleWare, Use };
