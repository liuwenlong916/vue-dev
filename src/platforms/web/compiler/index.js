/* @flow */

import { baseOptions } from "./options";
import { createCompiler } from "compiler/index";

//执行compiler/create-compiler.js返回的方法createCompiler，createCompiler执行完成返回对象
const { compile, compileToFunctions } = createCompiler(baseOptions);

export { compile, compileToFunctions };
