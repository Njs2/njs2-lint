module.exports = {
    rules: {
        "no-console": "warn",
        //* Avoid Bugs
        "no-undef": "warn",
        "semi": "warn", "semi-spacing": "warn",
        //* Best Practices
        "eqeqeq": "warn",
        "no-invalid-this": "warn",
        "no-return-assign": "warn",
        "no-unused-expressions": [
            "warn", {
                "allowTernary": true
            }
        ],
        "no-useless-concat": "warn",
        "no-useless-return": "warn",
        "no-constant-condition": "warn",
        "no-unused-vars": ["warn", {
            "argsIgnorePattern": "req|res|next|__"
        }],
        //* Enhance Readability
        "indent": [
            "warn",
            4, 
            { "SwitchCase": 1 }
        ],
        "no-mixed-spaces-and-tabs": "warn",
        "space-before-blocks": "warn",
        "space-in-parens": "warn",
        "space-infix-ops": "warn",
        "space-unary-ops": "warn",
        "quotes": ["warn", "single"],
        "max-lines": [
            "warn", {
                "max": 500
            }
        ],
        "keyword-spacing": "warn",
        "multiline-ternary": ["warn", "never"],
        "no-mixed-operators": "warn",
        "no-multiple-empty-lines": [
            "warn", {
                "max": 2,
                "maxEOF": 1
            }
        ],
        "no-whitespace-before-property": "warn",
        "nonblock-statement-body-position": "warn",
        "object-property-newline": [
            "warn", {
                "allowAllPropertiesOnSameLine": true
            }
        ],
        //* ES6
        "arrow-spacing": "warn",
        "no-confusing-arrow": "warn",
        "no-duplicate-imports": "warn",
        "no-var": "warn",
        "object-shorthand": "off",
        "prefer-const": "warn",
        "prefer-template": "warn",
        "no-multi-spaces": "warn"
    }
}