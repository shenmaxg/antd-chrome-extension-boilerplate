class CompilerEmitPlugin {
    static innerCompiler;

    apply(compiler) {
        CompilerEmitPlugin.innerCompiler = compiler;
    }
}

module.exports = CompilerEmitPlugin;
