contract BigStructHolder {
	struct BigStruct14 {
		uint u01;
		uint u02;
		uint u03;
		uint u04;
		uint u05;
		uint u06;
		uint u07;
		uint u08;
		uint u09;
		uint u10;
		uint u11;
		uint u12;
		uint u13;
		uint u14;
		// If I add "uint u15", compilation fails with:
		// Internal compiler error: Stack too deep, try removing local variables.
	}

	mapping (uint => BigStruct14) public bigStruct14s;

	function BigStructHolder() {
		bigStruct14s[0].u01 =  1;
		bigStruct14s[0].u02 =  2;
		bigStruct14s[0].u03 =  3;
		bigStruct14s[0].u04 =  4;
		bigStruct14s[0].u05 =  5;
		bigStruct14s[0].u06 =  6;
		bigStruct14s[0].u07 =  7;
		bigStruct14s[0].u08 =  8;
		bigStruct14s[0].u09 =  9;
		bigStruct14s[0].u10 = 10;
		bigStruct14s[0].u11 = 11;
		bigStruct14s[0].u12 = 12;
		bigStruct14s[0].u13 = 13;
		bigStruct14s[0].u14 = 14;
	}
}