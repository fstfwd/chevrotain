// change to generated code: wrapping in basic javascript module instead of 'require'
var antlr4Json;
(function (antlr4Json) {

    // Generated from JSON_ANTLR.g4 by ANTLR 4.5.1
    // jshint ignore: start

    var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
        "\u0002\u000e\u0088\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
        "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
        "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
        "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
        "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002",
        "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
        "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
        "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
        "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
        "\u0007\u000bE\n\u000b\f\u000b\u000e\u000bH\u000b\u000b\u0003\u000b\u0003",
        "\u000b\u0003\f\u0003\f\u0003\f\u0005\fO\n\f\u0003\r\u0003\r\u0003\r",
        "\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0005\u000f",
        "Z\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0006\u000f_\n\u000f\r",
        "\u000f\u000e\u000f`\u0003\u000f\u0005\u000fd\n\u000f\u0003\u000f\u0005",
        "\u000fg\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005",
        "\u000fm\n\u000f\u0003\u000f\u0005\u000fp\n\u000f\u0003\u0010\u0003\u0010",
        "\u0003\u0010\u0007\u0010u\n\u0010\f\u0010\u000e\u0010x\u000b\u0010\u0005",
        "\u0010z\n\u0010\u0003\u0011\u0003\u0011\u0005\u0011~\n\u0011\u0003\u0011",
        "\u0003\u0011\u0003\u0012\u0006\u0012\u0083\n\u0012\r\u0012\u000e\u0012",
        "\u0084\u0003\u0012\u0003\u0012\u0002\u0002\u0013\u0003\u0003\u0005\u0004",
        "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
        "\f\u0017\u0002\u0019\u0002\u001b\u0002\u001d\r\u001f\u0002!\u0002#\u000e",
        "\u0003\u0002\n\u0004\u0002$$^^\n\u0002$$11^^ddhhppttvv\u0005\u00022",
        ";CHch\u0003\u00022;\u0003\u00023;\u0004\u0002GGgg\u0004\u0002--//\u0005",
        "\u0002\u000b\f\u000f\u000f\"\"\u0090\u0002\u0003\u0003\u0002\u0002\u0002",
        "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
        "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
        "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
        "\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002",
        "\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002",
        "\u0002#\u0003\u0002\u0002\u0002\u0003%\u0003\u0002\u0002\u0002\u0005",
        "\'\u0003\u0002\u0002\u0002\u0007)\u0003\u0002\u0002\u0002\t+\u0003\u0002",
        "\u0002\u0002\u000b-\u0003\u0002\u0002\u0002\r/\u0003\u0002\u0002\u0002",
        "\u000f1\u0003\u0002\u0002\u0002\u00116\u0003\u0002\u0002\u0002\u0013",
        "<\u0003\u0002\u0002\u0002\u0015A\u0003\u0002\u0002\u0002\u0017K\u0003",
        "\u0002\u0002\u0002\u0019P\u0003\u0002\u0002\u0002\u001bV\u0003\u0002",
        "\u0002\u0002\u001do\u0003\u0002\u0002\u0002\u001fy\u0003\u0002\u0002",
        "\u0002!{\u0003\u0002\u0002\u0002#\u0082\u0003\u0002\u0002\u0002%&\u0007",
        "}\u0002\u0002&\u0004\u0003\u0002\u0002\u0002\'(\u0007.\u0002\u0002(",
        "\u0006\u0003\u0002\u0002\u0002)*\u0007\u007f\u0002\u0002*\b\u0003\u0002",
        "\u0002\u0002+,\u0007<\u0002\u0002,\n\u0003\u0002\u0002\u0002-.\u0007",
        "]\u0002\u0002.\f\u0003\u0002\u0002\u0002/0\u0007_\u0002\u00020\u000e",
        "\u0003\u0002\u0002\u000212\u0007v\u0002\u000223\u0007t\u0002\u00023",
        "4\u0007w\u0002\u000245\u0007g\u0002\u00025\u0010\u0003\u0002\u0002\u0002",
        "67\u0007h\u0002\u000278\u0007c\u0002\u000289\u0007n\u0002\u00029:\u0007",
        "u\u0002\u0002:;\u0007g\u0002\u0002;\u0012\u0003\u0002\u0002\u0002<=",
        "\u0007p\u0002\u0002=>\u0007w\u0002\u0002>?\u0007n\u0002\u0002?@\u0007",
        "n\u0002\u0002@\u0014\u0003\u0002\u0002\u0002AF\u0007$\u0002\u0002BE",
        "\u0005\u0017\f\u0002CE\n\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002",
        "DC\u0003\u0002\u0002\u0002EH\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002",
        "\u0002FG\u0003\u0002\u0002\u0002GI\u0003\u0002\u0002\u0002HF\u0003\u0002",
        "\u0002\u0002IJ\u0007$\u0002\u0002J\u0016\u0003\u0002\u0002\u0002KN\u0007",
        "^\u0002\u0002LO\t\u0003\u0002\u0002MO\u0005\u0019\r\u0002NL\u0003\u0002",
        "\u0002\u0002NM\u0003\u0002\u0002\u0002O\u0018\u0003\u0002\u0002\u0002",
        "PQ\u0007w\u0002\u0002QR\u0005\u001b\u000e\u0002RS\u0005\u001b\u000e",
        "\u0002ST\u0005\u001b\u000e\u0002TU\u0005\u001b\u000e\u0002U\u001a\u0003",
        "\u0002\u0002\u0002VW\t\u0004\u0002\u0002W\u001c\u0003\u0002\u0002\u0002",
        "XZ\u0007/\u0002\u0002YX\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002",
        "\u0002Z[\u0003\u0002\u0002\u0002[\\\u0005\u001f\u0010\u0002\\^\u0007",
        "0\u0002\u0002]_\t\u0005\u0002\u0002^]\u0003\u0002\u0002\u0002_`\u0003",
        "\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002",
        "ac\u0003\u0002\u0002\u0002bd\u0005!\u0011\u0002cb\u0003\u0002\u0002",
        "\u0002cd\u0003\u0002\u0002\u0002dp\u0003\u0002\u0002\u0002eg\u0007/",
        "\u0002\u0002fe\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002gh\u0003",
        "\u0002\u0002\u0002hi\u0005\u001f\u0010\u0002ij\u0005!\u0011\u0002jp",
        "\u0003\u0002\u0002\u0002km\u0007/\u0002\u0002lk\u0003\u0002\u0002\u0002",
        "lm\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002np\u0005\u001f\u0010",
        "\u0002oY\u0003\u0002\u0002\u0002of\u0003\u0002\u0002\u0002ol\u0003\u0002",
        "\u0002\u0002p\u001e\u0003\u0002\u0002\u0002qz\u00072\u0002\u0002rv\t",
        "\u0006\u0002\u0002su\t\u0005\u0002\u0002ts\u0003\u0002\u0002\u0002u",
        "x\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002",
        "\u0002wz\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002yq\u0003\u0002",
        "\u0002\u0002yr\u0003\u0002\u0002\u0002z \u0003\u0002\u0002\u0002{}\t",
        "\u0007\u0002\u0002|~\t\b\u0002\u0002}|\u0003\u0002\u0002\u0002}~\u0003",
        "\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0080\u0005",
        "\u001f\u0010\u0002\u0080\"\u0003\u0002\u0002\u0002\u0081\u0083\t\t\u0002",
        "\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002",
        "\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002",
        "\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0087\b\u0012\u0002",
        "\u0002\u0087$\u0003\u0002\u0002\u0002\u0010\u0002DFNY`cflovy}\u0084",
        "\u0003\b\u0002\u0002"].join("");


    var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

    var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

    function JSON_ANTLRLexer(input) {
        antlr4.Lexer.call(this, input);
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
        return this;
    }

    JSON_ANTLRLexer.prototype = Object.create(antlr4.Lexer.prototype);
    JSON_ANTLRLexer.prototype.constructor = JSON_ANTLRLexer;

    JSON_ANTLRLexer.EOF = antlr4.Token.EOF;
    JSON_ANTLRLexer.T__0 = 1;
    JSON_ANTLRLexer.T__1 = 2;
    JSON_ANTLRLexer.T__2 = 3;
    JSON_ANTLRLexer.T__3 = 4;
    JSON_ANTLRLexer.T__4 = 5;
    JSON_ANTLRLexer.T__5 = 6;
    JSON_ANTLRLexer.T__6 = 7;
    JSON_ANTLRLexer.T__7 = 8;
    JSON_ANTLRLexer.T__8 = 9;
    JSON_ANTLRLexer.STRING = 10;
    JSON_ANTLRLexer.NUMBER = 11;
    JSON_ANTLRLexer.WS = 12;


    JSON_ANTLRLexer.modeNames = [ "DEFAULT_MODE" ];

    JSON_ANTLRLexer.literalNames = [ 'null', "'{'", "','", "'}'", "':'", "'['",
                                     "']'", "'true'", "'false'", "'null'" ];

    JSON_ANTLRLexer.symbolicNames = [ 'null', 'null', 'null', 'null', 'null',
                                      'null', 'null', 'null', 'null', 'null',
                                      "STRING", "NUMBER", "WS" ];

    JSON_ANTLRLexer.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5",
                                  "T__6", "T__7", "T__8", "STRING", "ESC", "UNICODE",
                                  "HEX", "NUMBER", "INT", "EXP", "WS" ];

    JSON_ANTLRLexer.grammarFileName = "JSON_ANTLR.g4";

    // change to generated code: 'exporting' via ns object
    antlr4Json.JSON_ANTLRLexer = JSON_ANTLRLexer;

})(antlr4Json || (antlr4Json = {}));
