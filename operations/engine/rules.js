var turingRule_test = `
i:q0
a:q10
q0,0,_,_
q0,0,_,_,>,-,-
q0,1,_,_
q0,1,_,_,>,-,-
q0,#,_,_
q1,_,_,_,>,-,-
q1,0,_,_
q1,_,0,_,>,>,-
q1,1,_,_
q1,_,1,_,>,>,-
q1,_,_,_
q2,_,_,_,<,-,-
q2,_,_,_
q2,_,_,_,<,-,-
q2,0,_,_
q3,0,_,_,-,-,-
q2,1,_,_
q3,1,_,_,-,-,-
q3,0,_,_
q4,0,_,_,-,-,-
q3,1,_,_
q5,1,_,_,-,<,<
q3,_,_,_
q6,_,_,_,>,-,-
q4,0,_,_
q3,0,0,_,<,>,-
q4,1,_,_
q3,1,0,_,<,>,-
q5,1,0,0
q5,1,0,0,-,<,<
q5,1,0,1
q5,1,0,1,-,<,<
q5,1,1,0
q5,1,1,1,-,<,<
q5,1,1,1
q8,1,1,0,-,<,<
q5,1,0,_
q5,1,0,0,-,<,<
q5,1,1,_
q5,1,1,1,-,<,<
q5,1,_,0
q5,1,_,0,-,<,<
q5,1,_,1
q5,1,_,1,-,<,<
q5,1,_,_
q7,1,_,_,-,>,>
q8,1,1,1
q8,1,1,1,-,<,<
q8,1,1,0
q8,1,1,0,-,<,<
q8,1,0,1
q8,1,0,0,-,<,<
q8,1,0,0
q5,1,0,1,-,<,<
q8,1,0,_
q5,1,0,1,-,<,<
q8,1,1,_
q8,1,1,0,-,<,<
q8,1,_,0
q5,1,_,1,-,<,<
q8,1,_,1
q8,1,_,0,-,<,<
q8,1,_,_
q5,1,_,1,-,<,<
q7,1,_,0
q7,1,_,0,-,>,>
q7,1,_,1
q7,1,_,1,-,>,>
q7,1,0,_
q7,1,0,_,-,>,>
q7,1,1,_
q7,1,1,_,-,>,>
q7,1,0,0
q7,1,0,0,-,>,>
q7,1,0,1
q7,1,0,1,-,>,>
q7,1,1,0
q7,1,1,0,-,>,>
q7,1,1,1
q7,1,1,1,-,>,>
q7,1,_,_
q4,1,_,_,-,-,-
q6,0,_,_
q6,_,_,_,>,-,-
q6,1,_,_
q6,_,_,_,>,-,-
q6,_,_,_
q9,_,_,_,<,<,<
q9,0,0,0
q9,0,_,_,<,<,<
q9,0,0,1
q9,1,_,_,<,<,<
q9,0,1,0
q9,0,_,_,<,<,<
q9,0,1,1
q9,1,_,_,<,<,<
q9,1,0,0
q9,0,_,_,<,<,<
q9,1,0,1
q9,1,_,_,<,<,<
q9,1,1,0
q9,0,_,_,<,<,<
q9,1,1,1
q9,1,_,_,<,<,<
q9,0,_,_
q9,_,_,_,<,-,-
q9,1,_,_
q9,_,_,_,<,-,-
q9,_,0,_
q9,_,_,_,-,<,-
q9,_,1,_
q9,_,_,_,-,<,-
q9,_,_,0
q9,0,_,_,<,-,<
q9,_,_,1
q9,1,_,_,<,-,<
q9,0,0,_
q9,_,_,_,<,<,-
q9,0,1,_
q9,_,_,_,<,<,-
q9,1,0,_
q9,_,_,_,<,<,-
q9,1,1,_
q9,_,_,_,<,<,-
q9,0,_,0
q9,0,_,_,<,<,<
q9,1,_,0
q9,0,_,_,<,<,<
q9,0,_,0
q9,0,_,_,<,<,<
q9,0,_,1
q9,1,_,_,<,<,<
q9,1,_,1
q9,1,_,_,<,<,<
q9,_,0,0
q9,0,_,_,<,<,<
q9,_,0,1
q9,1,_,_,<,<,<
q9,_,1,0
q9,0,_,_,<,<,<
q9,_,1,1
q9,1,_,_,<,<,<
q9,_,_,_
q10,_,_,_,-,-,-
`;

var penjumlahan_3track = `
i:qStart
a:qAccept
qStart,0,_,_
q1,0,0,0,>,>,>
qStart,M,_,_
q11,M,M,M,>,>,>
qStart,1,_,_
q21,_,_,_,>,>,>
q1,0,_,_
q1,0,0,0,>,>,>
q1,1,_,_
q2,1,1,1,>,>,>
q2,0,_,_
q3,0,0,0,>,>,>
q2,M,_,_
q2,M,M,_,>,>,>
q2,_,_,_
q2,_,_,_,<,<,<
q2,1,1,1
qAccept,1,1,_,>,>,>
q2,M,M,_
q6,M,_,_,<,<,<
q3,0,_,_
q3,0,0,0,>,>,>
q3,_,_,_
q4,_,_,_,<,<,<
q4,0,0,0
q5,0,0,_,<,<,<
q5,0,0,0
q5,0,0,0,<,<,<
q5,1,1,1
qAccept,1,1,0,>,>,>
q6,M,M,_
q6,M,M,_,<,<,<
q6,1,1,1
q6,1,1,1,<,<,<
q6,0,0,0
q6,0,0,0,<,<,<
q6,0,0,_
q7,0,0,_,>,>,>
q6,_,_,_
q7,_,_,_,>,>,>
q7,0,0,0
q8,0,0,_,>,>,>
q7,1,1,1
q10,1,1,M,>,>,>
q8,0,0,0
q8,0,0,0,>,>,>
q8,1,1,1
q8,1,1,1,>,>,>
q8,M,M,_
q8,M,M,_,>,>,>
q8,M,_,_
q9,M,_,_,<,<,<
q9,M,M,_
q6,M,_,_,<,<,<
q9,1,1,1
qAccept,1,1,_,>,>,>
q10,M,M,_
q10,M,M,M,>,>,>
q10,M,_,_
qAccept,M,_,_,>,>,>
q11,M,_,_
q11,M,M,M,>,>,>
q11,1,_,_
q12,1,1,1,>,>,>
q12,M,_,_
q13,M,M,M,>,>,>
q12,0,_,_
q12,0,0,_,>,>,>
q12,_,_,_
q12,_,_,_,<,<,<
q12,1,1,1
qAccept,1,1,_,>,>,>
q12,0,0,_
q16,0,_,_,<,<,<
q13,M,_,_
q13,M,M,M,>,>,>
q13,_,_,_
q14,_,_,_,<,<,<
q14,M,M,M
q15,M,M,_,<,<,<
q15,M,M,M
q15,M,M,M,<,<,<
q15,1,1,1
qAccept,1,1,M,>,>,>
q16,0,0,_
q16,0,0,_,<,<,<
q16,1,1,1
q16,1,1,1,<,<,<
q16,M,M,M
q16,M,M,M,<,<,<
q16,M,M,_
q17,M,M,_,>,>,>
q16,_,_,_
q17,_,_,_,>,>,>
q17,M,M,M
q18,M,M,_,>,>,>
q17,1,1,1
q20,1,1,0,>,>,>
q18,M,M,M
q18,M,M,M,>,>,>
q18,1,1,1
q18,1,1,1,>,>,>
q18,0,0,_
q18,0,0,_,>,>,>
q18,0,_,_
q19,0,_,_,<,<,<
q19,0,0,_
q16,0,_,_,<,<,<
q19,1,1,1
qAccept,1,1,_,>,>,>
q20,0,0,_
q20,0,0,0,>,>,>
q20,0,_,_
qAccept,0,_,_,>,>,>
q21,0,_,_
q21,0,_,0,>,>,>
q21,M,_,_
q21,M,_,M,>,>,>
q21,_,_,_
qAccept,_,_,_,>,>,>
`;

var penjumlahan_2tapes = `
i:qStart
a:qAccept
qStart,0,_
qStart,0,0,>,>
qStart,M,_
qStart,M,M,>,>
qStart,1,_
q1,1,_,>,<
q1,0,0
q2,0,0,-,>
q1,M,M
q2,M,M,-,>
q1,0,M
q3,0,_,>,<
q1,M,0
q3,M,_,>,<
q1,0,_
q3,0,0,>,<
q1,M,_
q3,M,M,>,<
q1,_,_
qAccept,_,_,>,>
q1,_,0
qAccept,_,0,>,>
q1,_,M
qAccept,_,M,>,>
q2,0,_
q2,0,0,>,>
q2,M,_
q2,M,M,>,>
q2,_,_
qAccept,_,_,>,>
q3,0,M
q3,0,_,>,<
q3,M,0
q3,M,_,>,<
q3,M,_
q3,M,M,>,>
q3,0,_
q3,0,0,>,>
q3,_,0
qAccept,_,0,>,>
q3,_,M
qAccept,_,M,>,>
q3,_,_
qAccept,_,_,>,>
`;

var pengurangan_2tapes = `
i:qStart
a:qAccept
qStart,0,_
qStart,0,0,>,>
qStart,M,_
qStart,M,M,>,>
qStart,1,_
q1,1,_,>,<
q1,0,M
q2,0,M,-,>
q1,M,0
q2,M,0,-,>
q1,0,0
q3,0,_,>,<
q1,M,M
q3,M,_,>,<
q1,0,_
q3,0,M,>,>
q1,M,_
q3,M,0,>,>
q1,_,_
qAccept,_,_,>,>
q1,_,0
qAccept,_,0,>,>
q1,_,M
qAccept,_,M,>,>
q2,0,_
q2,0,M,>,>
q2,M,_
q2,M,0,>,>
q2,_,_
qAccept,_,_,>,>
q3,0,0
q3,0,_,>,<
q3,M,M
q3,M,_,>,<
q3,0,_
q3,0,M,>,>
q3,M,_
q3,M,0,>,>
q3,_,0
qAccept,_,0,>,>
q3,_,M
qAccept,_,M,>,>
q3,_,_
qAccept,_,_,>,>
`;

var pengurangan_3tracks = `
i:q0
a:q25
q0,0,_,_
q1,0,0,0,>,>,>
q0,M,_,_
q10,M,M,M,>,>,>
q0,1,_,_
q19,1,_,_,>,>,>
q1,0,_,_
q1,0,0,0,>,>,>
q1,1,_,_
q1,1,1,1,>,>,>
q1,_,_,_
q2,_,_,_,<,<,<
q1,M,_,_
q1,M,M,0,>,>,>
q2,0,0,0
q3,0,0,_,<,<,<
q2,M,M,0
q9,M,M,_,<,<,<
q2,1,1,1
q25,1,1,_,>,>,>
q3,0,0,0
q3,0,0,0,<,<,<
q3,1,1,1
q3,1,1,1,<,<,<
q3,_,_,_
q4,_,_,_,>,>,>
q3,0,0,_
q7,0,0,_,>,>,>
q4,0,0,0
q5,0,0,_,>,>,>
q5,0,0,0
q5,0,0,0,>,>,>
q5,1,1,1
q5,1,1,1,>,>,>
q5,0,0,_
q6,0,0,_,<,<,<
q6,0,0,0
q3,0,0,_,<,<,<
q6,1,1,1
q8,1,1,_,>,>,>
q7,0,0,0
q5,0,0,_,>,>,>
q7,1,1,1
q8,1,1,M,>,>,>
q8,0,0,0
q8,0,0,M,>,>,>
q8,0,0,_
q25,0,0,_,>,>,>
q9,M,M,0
q9,M,M,0,<,<,<
q9,1,1,1
q25,1,1,0,>,>,>
q10,M,_,_
q10,M,M,M,>,>,>
q10,1,_,_
q10,1,1,1,>,>,>
q10,_,_,_
q11,_,_,_,<,<,<
q10,0,_,_
q10,0,0,M,>,>,>
q11,M,M,M
q12,M,M,_,<,<,<
q11,1,1,1
q25,1,1,_,>,>,>
q11,0,0,M
q18,0,0,_,<,<,<
q12,M,M,M
q12,M,M,M,<,<,<
q12,1,1,1
q12,1,1,1,<,<,<
q12,_,_,_
q13,_,_,_,>,>,>
q12,M,M,_
q16,M,M,_,>,>,>
q13,M,M,M
q14,M,M,_,>,>,>
q14,M,M,M
q14,M,M,M,>,>,>
q14,1,1,1
q14,1,1,1,>,>,>
q14,M,M,_
q15,M,M,_,<,<,<
q15,M,M,M
q12,M,M,_,<,<,<
q15,1,1,1
q17,1,1,_,>,>,>
q16,M,M,M
q14,M,M,_,>,>,>
q16,1,1,1
q17,1,1,0,>,>,>
q17,M,M,M
q17,M,M,0,>,>,>
q17,M,M,_
q25,M,M,_,>,>,>
q18,0,0,M
q18,0,0,M,<,<,<
q18,1,1,1
q25,1,1,M,>,>,>
q19,0,_,_
q19,0,_,M,>,>,>
q19,M,_,_
q19,M,_,0,>,>,>
q19,_,_,_
q25,_,_,_,>,>,>
`;

var perkalian_3tracks = `
i:qStart
a:qAccept
qStart,0,_,_
q1,0,_,_,>,>,>
qStart,M,_,_
q11,M,_,_,>,>,>
qStart,1,_,_
q19,1,_,_,>,>,>
q1,0,_,_
q1,0,0,_,>,>,>
q1,0,0,_
q1,0,0,_,>,>,>
q1,1,_,_
q1,1,1,_,>,>,>
q1,1,1,_
q1,1,1,_,>,>,>
q1,0,X,0
q5,0,0,0,>,>,>
q1,M,X,M
q8,M,0,M,>,>,>
q1,_,_,_
q2,_,_,_,<,<,<
q1,M,_,_
q1,M,0,_,>,>,>
q2,0,0,_
q2,0,X,0,<,<,<
q2,M,0,_
q2,M,X,M,<,<,<
q2,0,0,0
q2,0,X,0,<,<,<
q2,M,0,M
q2,M,X,M,<,<,<
q2,1,1,_
q3,1,1,_,<,<,<
q3,0,0,_
q3,0,0,_,<,<,<
q3,0,_,_
q4,0,_,_,>,>,>
q4,0,0,_
q1,0,_,_,>,>,>
q4,1,1,_
qAccept,1,1,_,>,>,>
q5,0,X,0
q5,0,X,0,>,>,>
q5,M,X,M
q5,M,X,M,>,>,>
q5,_,_,0
q5,_,_,0,>,>,>
q5,_,_,_
q6,_,_,0,<,<,<
q6,0,X,0
q6,0,X,0,<,<,<
q6,_,_,0
q6,_,_,0,<,<,<
q6,0,0,0
q7,0,0,0,>,>,>
q7,_,_,0
q2,_,_,0,<,<,<
q7,0,X,0
q5,0,0,0,>,>,>
q8,M,X,M
q8,M,X,M,>,>,>
q8,_,_,M
q8,_,_,M,>,>,>
q8,_,_,_
q9,_,_,M,<,<,<
q9,M,X,M
q9,M,X,M,<,<,<
q9,_,_,M
q9,_,_,M,<,<,<
q9,M,0,M
q10,M,0,M,>,>,>
q10,M,X,M
q8,M,0,M,>,>,>
q10,_,_,M
q2,_,_,M,<,<,<
q11,M,_,_
q11,M,M,_,>,>,>
q11,M,M,_
q11,M,M,_,>,>,>
q11,1,_,_
q11,1,1,_,>,>,>
q11,1,1,_
q11,1,1,_,>,>,>
q11,M,X,0
q15,M,M,0,>,>,>
q11,0,X,M
q18,0,M,M,>,>,>
q11,_,_,_
q12,_,_,_,<,<,<
q11,0,_,_
q11,0,M,_,>,>,>
q12,M,M,_
q12,M,X,0,<,<,<
q12,0,M,_
q12,0,X,M,<,<,<
q12,M,M,0
q12,M,X,0,<,<,<
q12,0,M,M
q12,0,X,M,<,<,<
q12,1,1,_
q13,1,1,_,<,<,<
q13,M,M,_
q13,M,M,_,<,<,<
q13,M,_,_
q14,M,_,_,>,>,>
q14,M,M,_
q11,M,_,_,>,>,>
q14,1,1,_
qAccept,1,1,_,>,>,>
q15,M,X,0
q15,M,X,0,>,>,>
q15,0,X,M
q15,0,X,M,>,>,>
q15,_,_,0
q15,_,_,0,>,>,>
q15,_,_,_
q16,_,_,0,<,<,<
q16,M,X,0
q16,M,X,0,<,<,<
q16,_,_,0
q16,_,_,0,<,<,<
q16,M,M,0
q17,M,M,0,>,>,>
q17,_,_,0
q12,_,_,0,<,<,<
q17,M,X,0
q15,M,M,0,>,>,>
q18,0,X,M
q18,0,X,M,>,>,>
q18,_,_,M
q18,_,_,M,>,>,>
q18,_,_,_
q19,_,_,M,<,<,<
q19,0,X,M
q19,0,X,M,<,<,<
q19,_,_,M
q19,_,_,M,<,<,<
q19,0,M,M
q20,0,M,M,>,>,>
q20,0,X,M
q18,0,M,M,>,>,>
q20,_,_,M
q12,_,_,M,<,<,<
`;

var perkalian_3tapes = `
i:qStart
a:qAccept
qStart,0,_,_
qStart,0,0,_,>,>,-
qStart,M,_,_
qStart,M,M,_,>,>,-
qStart,1,_,_
q1,1,_,_,>,<,-
q1,0,0,_
q1,0,0,0,-,<,>
q1,M,M,_
q1,M,M,0,-,<,>
q1,0,M,_
q1,0,M,M,-,<,>
q1,M,0,_
q1,M,0,M,-,<,>
q1,0,_,_
q2,0,_,_,>,>,-
q1,M,_,_
q2,M,_,_,>,>,-
q1,_,0,_
qAccept,_,0,_,-,-,-
q1,_,M,_
qAccept,_,M,_,-,-,-
q1,_,_,_
qAccept,_,_,_,-,-,-
q2,0,0,_
q2,0,0,0,-,>,>
q2,M,M,_
q2,M,M,0,-,>,>
q2,0,M,_
q2,0,M,M,-,>,>
q2,M,0,_
q2,M,0,M,-,>,>
q2,0,_,_
q3,0,_,_,>,-,-
q2,M,_,_
q3,M,_,_,>,-,-
q2,_,0,_
qAccept,_,0,_,-,-,-
q2,_,M,_
qAccept,_,M,_,-,-,-
q2,_,_,_
qAccept,_,_,_,-,-,-
q3,0,_,_
q1,0,_,_,-,<,-
q3,M,_,_
q1,M,_,_,-,<,-
q3,_,_,_
qAccept,_,_,_,-,-,-
`;

var pembagian_3tapes = `
i:q0
a:qa
q0,1,_,_
qa,1,_,_,-,-,-
q0,+,_,_
q1,_,_,+,>,-,>
q0,-,_,_
q1,_,_,-,>,-,>
q1,0,_,_
q1,_,0,_,>,>,-
q1,1,_,_
q2,_,_,_,>,-,-
q2,_,_,_
q2,_,_,_,-,-,<
q2,_,_,+
qa,_,_,_,-,-,-
q2,_,_,-
qa,_,_,_,-,-,-
q2,+,_,_
q2,+,_,_,-,-,<
q2,+,_,+
q3,_,_,+,>,<,>
q2,+,_,-
q3,_,_,-,>,<,>
q2,-,_,_
q2,-,_,_,-,-,<
q2,-,_,+
q3,_,_,-,>,<,>
q2,-,_,-
q3,_,_,+,>,<,>
q3,0,0,_
q3,0,_,_,>,<,-
q3,_,_,_
qa,_,_,0,-,-,>
q3,0,_,_
q4,0,_,1,<,-,>
q4,0,_,_
q4,0,_,0,<,-,>
q4,_,_,_
q5,_,_,1,>,-,>
q5,0,_,_
q5,0,_,0,>,-,>
q5,_,_,_
qa,_,_,_,-,-,-
q3,_,0,_
q6,_,0,0,<,-,>
q6,0,0,_
q6,0,_,_,<,<,-
q6,_,_,_
qa,_,_,0,-,-,>
q6,0,_,_
q7,0,_,1,>,-,>
q7,0,_,_
q7,0,_,0,>,-,>
q7,_,_,_
q8,_,_,1,<,-,>
q8,0,_,_
q8,0,_,0,<,-,>
q8,_,_,_
qa,_,_,_,-,-,-
q6,_,0,_
q3,_,0,0,>,-,>
`;

var pembagian_4tracks = `
i:qStart
a:qAccept
qStart,0,_,_,_
q1,0,0,_,_,>,>,>,>
qStart,M,_,_,_
q33,M,M,_,_,>,>,>,>
qStart,1,_,_,_
qAccept,1,_,_,1,>,>,>,>
q1,0,_,_,_
q1,0,0,_,_,>,>,>,>
q1,1,_,_,_
q2,1,1,_,_,>,>,>,>
q2,0,_,_,_
q3,0,0,_,_,>,>,>,>
q2,M,_,_,_
q18,M,M,_,_,>,>,>,>
q2,_,_,_,_
qAccept,_,_,_,_,>,>,>,>
q3,0,_,_,_
q3,0,0,_,_,>,>,>,>
q3,_,_,_,_
q4,_,_,_,_,<,<,<,<
q4,_,_,0,0
q4,_,_,0,0,<,<,<,<
q4,1,1,_,_
q6,1,1,_,_,>,>,>,>
q4,0,0,_,_
q5,0,X,_,_,<,<,<,<
q5,0,0,_,_
q5,0,0,_,_,<,<,<,<
q5,1,1,_,_
q5,1,1,_,_,<,<,<,<
q5,0,_,_,_
q6,0,_,_,_,>,>,>,>
q5,_,_,_,_
q6,_,_,_,_,>,>,>,>
q6,0,X,_,_
q6,0,0,_,_,>,>,>,>
q6,1,1,_,_
q8,1,1,_,_,>,>,>,>
q6,_,_,0,0
q6,_,_,0,0,>,>,>,>
q6,_,_,_,_
q4,_,_,0,0,<,<,<,<
q6,0,0,_,_
q7,0,_,_,_,>,>,>,>
q7,0,0,_,_
q7,0,0,_,_,>,>,>,>
q7,1,1,_,_
q7,1,1,_,_,>,>,>,>
q7,0,X,_,_
q4,0,X,_,_,<,<,<,<
q8,0,0,_,_
q8,0,0,_,_,>,>,>,>
q8,0,X,_,_
q8,0,0,_,_,>,>,>,>
q8,_,_,0,0
q8,_,_,0,0,>,>,>,>
q8,_,_,_,0
q9,_,_,_,0,<,<,<,<
q8,_,_,_,_
q9,_,_,_,1,<,<,<,<
q9,_,_,_,_
q17,_,_,_,_,>,>,>,>
q9,0,0,_,_
q9,0,0,_,_,<,<,<,<
q9,1,1,_,_
q9,1,1,_,_,<,<,<,<
q9,0,_,_,_
q12,0,0,_,_,>,>,>,>
q9,_,_,0,0
q10,_,_,_,0,<,<,<,<
q10,1,1,_,_
q8,1,1,_,_,>,>,>,>
q10,_,_,0,0
q10,_,_,0,0,<,<,<,<
q10,0,0,_,_
q11,0,X,_,_,<,<,<,<
q11,0,0,_,_
q11,0,0,_,_,<,<,<,<
q11,1,1,_,_
q11,1,1,_,_,<,<,<,<
q11,_,_,_,_
q13,_,_,_,_,>,>,>,>
q11,_,_,_,0
q11,_,_,_,0,<,<,<,<
q11,_,_,_,1
q11,_,_,_,1,<,<,<,<
q11,0,_,_,_
q12,0,0,_,_,>,>,>,>
q12,0,0,_,_
q12,0,0,_,_,>,>,>,>
q12,1,1,_,_
q12,1,1,_,_,>,>,>,>
q12,_,_,_,0
q12,_,_,_,0,>,>,>,>
q12,_,_,_,1
q12,_,_,_,1,>,>,>,>
q12,_,_,_,_
q11,_,_,_,0,<,<,<,<
q12,0,X,_,_
q10,0,X,_,_,<,<,<,<
q13,0,0,_,_
q13,0,0,_,_,>,>,>,>
q13,1,1,_,_
q13,1,1,_,_,>,>,>,>
q13,_,_,_,0
q13,_,_,_,0,>,>,>,>
q13,_,_,_,1
q13,_,_,_,1,>,>,>,>
q13,_,_,_,_
q14,_,_,_,1,<,<,<,<
q14,_,_,_,0
q14,_,_,_,0,<,<,<,<
q14,_,_,_,1
q14,_,_,_,1,<,<,<,<
q14,0,0,_,_
q14,0,0,_,_,<,<,<,<
q14,0,X,_,_
q15,0,X,_,_,>,>,>,>
q14,1,1,_,_
q15,1,1,_,_,>,>,>,>
q15,_,_,_,0
qAccept,_,_,_,0,>,>,>,>
q15,_,_,_,1
qAccept,_,_,_,1,>,>,>,>
q15,0,0,_,_
q16,0,X,_,_,>,>,>,>
q16,0,0,_,_
q16,0,0,_,_,>,>,>,>
q16,_,_,_,0
q16,_,_,_,0,>,>,>,>
q16,_,_,_,1
q16,_,_,_,1,>,>,>,>
q16,_,_,_,_
q14,_,_,_,0,<,<,<,<
q17,0,0,_,_
q17,0,0,_,_,>,>,>,>
q17,1,1,_,_
q17,1,1,_,_,>,>,>,>
q17,_,_,_,0
q17,_,_,_,0,>,>,>,>
q17,_,_,_,1
qAccept,_,_,_,_,>,>,>,>
q18,M,_,_,_
q18,M,M,_,_,>,>,>,>
q18,_,_,_,_
q19,_,_,_,_,<,<,<,<
q19,_,_,M,M
q19,_,_,M,M,<,<,<,<
q19,1,1,_,_
q21,1,1,_,_,>,>,>,>
q19,M,M,_,_
q20,M,X,_,_,<,<,<,<
q20,M,M,_,_
q20,M,M,_,_,<,<,<,<
q20,1,1,_,_
q20,1,1,_,_,<,<,<,<
q20,0,0,_,_
q20,0,0,_,_,<,<,<,<
q20,_,_,_,_
q21,_,_,_,_,>,>,>,>
q20,0,_,_,_
q21,0,_,_,_,>,>,>,>
q21,M,X,_,_
q21,M,M,_,_,>,>,>,>
q21,0,0,_,_
q22,0,_,_,_,>,>,>,>
q21,_,_,_,_
q19,_,_,M,M,<,<,<,<
q21,_,_,M,M
q21,_,_,M,M,>,>,>,>
q21,1,1,_,_
q23,1,1,_,_,>,>,>,>
q22,0,0,_,_
q22,0,0,_,_,>,>,>,>
q22,1,1,_,_
q22,1,1,_,_,>,>,>,>
q22,M,M,_,_
q22,M,M,_,_,>,>,>,>
q22,M,X,_,_
q19,M,X,_,_,<,<,<,<
q23,M,X,_,_
q23,M,M,_,_,>,>,>,>
q23,_,_,M,M
q23,_,_,M,M,>,>,>,>
q23,_,_,_,M
q24,_,_,_,M,<,<,<,<
q23,_,_,_,_
q24,_,_,_,1,<,<,<,<
q23,M,M,_,_
q23,M,M,_,_,>,>,>,>
q23,M,X,_,_
q23,M,M,_,_,>,>,>,>
q24,_,_,_,_
q32,_,_,_,_,>,>,>,>
q24,_,_,M,M
q25,_,_,_,M,<,<,<,<
q24,M,M,_,_
q24,M,M,_,_,<,<,<,<
q24,1,1,_,_
q24,1,1,_,_,<,<,<,<
q24,0,0,_,_
q24,0,0,_,_,<,<,<,<
q24,0,_,_,_
q27,0,0,_,_,>,>,>,>
q25,_,_,M,M
q25,_,_,M,M,<,<,<,<
q25,M,M,_,_
q26,M,X,_,_,<,<,<,<
q25,1,1,_,_
q23,1,1,_,_,>,>,>,>
q26,M,M,_,_
q26,M,M,_,_,<,<,<,<
q26,1,1,_,_
q26,1,1,_,_,<,<,<,<
q26,_,_,_,_
q28,_,_,_,_,>,>,>,>
q26,0,_,_,_
q27,0,0,_,_,>,>,>,>
q26,0,_,_,_
q27,0,0,_,_,>,>,>,>
q26,0,0,_,_
q26,0,0,_,_,<,<,<,<
q27,1,1,_,_
q27,1,1,_,_,>,>,>,>
q26,_,_,_,1
q26,_,_,_,1,<,<,<,<
q26,_,_,_,M
q26,_,_,_,M,<,<,<,<
q27,M,X,_,_
q25,M,X,_,_,<,<,<,<
q27,M,M,_,_
q27,M,M,_,_,>,>,>,>
q27,0,0,_,_
q27,0,0,_,_,>,>,>,>
q27,_,_,_,_
q26,_,_,_,M,<,<,<,<
q27,_,_,_,M
q27,_,_,_,M,>,>,>,>
q27,_,_,_,1
q27,_,_,_,1,>,>,>,>
q28,0,0,_,_
q28,0,0,_,_,>,>,>,>
q28,1,1,_,_
q28,1,1,_,_,>,>,>,>
q28,_,_,_,M
q28,_,_,_,M,>,>,>,>
q28,_,_,_,1
q28,_,_,_,1,>,>,>,>
q28,_,_,_,_
q29,_,_,_,1,<,<,<,<
q28,M,M,_,_
q28,M,M,_,_,>,>,>,>
q29,_,_,_,M
q29,_,_,_,M,<,<,<,<
q29,_,_,_,1
q29,_,_,_,1,<,<,<,<
q29,M,M,_,_
q29,M,M,_,_,<,<,<,<
q29,1,1,_,_
q30,1,1,_,_,>,>,>,>
q29,M,X,_,_
q30,M,X,_,_,>,>,>,>
q30,_,_,_,1
qAccept,_,_,_,1,>,>,>,>
q30,M,M,_,_
q31,M,X,_,_,>,>,>,>
q30,_,_,_,M
qAccept,_,_,_,M,>,>,>,>
q31,M,M,_,_
q31,M,M,_,_,>,>,>,>
q31,_,_,_,M
q31,_,_,_,M,>,>,>,>
q31,_,_,_,1
q31,_,_,_,1,>,>,>,>
q31,_,_,_,_
q29,_,_,_,M,<,<,<,<
q32,0,0,_,_
q32,0,0,_,_,>,>,>,>
q32,M,M,_,_
q32,M,M,_,_,>,>,>,>
q32,1,1,_,_
q32,1,1,_,_,>,>,>,>
q32,_,_,_,M
q32,_,_,_,M,>,>,>,>
q32,_,_,_,1
qAccept,_,_,_,_,>,>,>,>
q33,M,_,_,_
q33,M,M,_,_,>,>,>,>
q33,1,_,_,_
q34,1,1,_,_,>,>,>,>
q34,M,_,_,_
q35,M,M,_,_,>,>,>,>
q34,_,_,_,_
qAccept,_,_,_,_,>,>,>,>
q34,0,_,_,_
q50,0,0,_,_,>,>,>,>
q35,M,_,_,_
q35,M,M,_,_,>,>,>,>
q35,_,_,_,_
q36,_,_,_,_,<,<,<,<
q36,_,_,0,0
q36,_,_,0,0,<,<,<,<
q36,1,1,_,_
q38,1,1,_,_,>,>,>,>
q36,M,M,_,_
q37,M,X,_,_,<,<,<,<
q37,M,M,_,_
q37,M,M,_,_,<,<,<,<
q37,1,1,_,_
q37,1,1,_,_,<,<,<,<
q37,M,_,_,_
q38,M,_,_,_,>,>,>,>
q37,_,_,_,_
q38,_,_,_,_,>,>,>,>
q38,M,X,_,_
q38,M,M,_,_,>,>,>,>
q38,1,1,_,_
q40,1,1,_,_,>,>,>,>
q38,_,_,0,0
q38,_,_,0,0,>,>,>,>
q38,_,_,_,_
q36,_,_,0,0,<,<,<,<
q38,M,M,_,_
q39,M,_,_,_,>,>,>,>
q39,M,M,_,_
q39,M,M,_,_,>,>,>,>
q39,1,1,_,_
q39,1,1,_,_,>,>,>,>
q39,M,X,_,_
q36,M,X,_,_,<,<,<,<
q40,M,M,_,_
q40,M,M,_,_,>,>,>,>
q40,M,X,_,_
q40,M,M,_,_,>,>,>,>
q40,_,_,0,0
q40,_,_,0,0,>,>,>,>
q40,_,_,_,0
q41,_,_,_,0,<,<,<,<
q40,_,_,_,_
q41,_,_,_,1,<,<,<,<
q41,_,_,_,_
q49,_,_,_,_,>,>,>,>
q41,M,M,_,_
q41,M,M,_,_,<,<,<,<
q41,1,1,_,_
q41,1,1,_,_,<,<,<,<
q41,M,_,_,_
q44,M,M,_,_,>,>,>,>
q41,_,_,0,0
q42,_,_,_,0,<,<,<,<
q42,1,1,_,_
q40,1,1,_,_,>,>,>,>
q42,_,_,0,0
q42,_,_,0,0,<,<,<,<
q42,M,M,_,_
q43,M,X,_,_,<,<,<,<
q43,M,M,_,_
q43,M,M,_,_,<,<,<,<
q43,1,1,_,_
q43,1,1,_,_,<,<,<,<
q43,_,_,_,_
q45,_,_,_,_,>,>,>,>
q43,_,_,_,0
q43,_,_,_,0,<,<,<,<
q43,_,_,_,1
q43,_,_,_,1,<,<,<,<
q43,M,_,_,_
q44,M,M,_,_,>,>,>,>
q44,M,M,_,_
q44,M,M,_,_,>,>,>,>
q44,1,1,_,_
q44,1,1,_,_,>,>,>,>
q44,_,_,_,0
q44,_,_,_,0,>,>,>,>
q44,_,_,_,1
q44,_,_,_,1,>,>,>,>
q44,_,_,_,_
q43,_,_,_,0,<,<,<,<
q44,M,X,_,_
q42,M,X,_,_,<,<,<,<
q45,M,M,_,_
q45,M,M,_,_,>,>,>,>
q45,1,1,_,_
q45,1,1,_,_,>,>,>,>
q45,_,_,_,0
q45,_,_,_,0,>,>,>,>
q45,_,_,_,1
q45,_,_,_,1,>,>,>,>
q45,_,_,_,_
q46,_,_,_,1,<,<,<,<
q46,_,_,_,0
q46,_,_,_,0,<,<,<,<
q46,_,_,_,1
q46,_,_,_,1,<,<,<,<
q46,M,M,_,_
q46,M,M,_,_,<,<,<,<
q46,M,X,_,_
q47,M,X,_,_,>,>,>,>
q46,1,1,_,_
q47,1,1,_,_,>,>,>,>
q47,_,_,_,0
qAccept,_,_,_,0,>,>,>,>
q47,_,_,_,1
qAccept,_,_,_,1,>,>,>,>
q47,M,M,_,_
q48,M,X,_,_,>,>,>,>
q48,M,M,_,_
q48,M,M,_,_,>,>,>,>
q48,_,_,_,0
q48,_,_,_,0,>,>,>,>
q48,_,_,_,1
q48,_,_,_,1,>,>,>,>
q48,_,_,_,_
q46,_,_,_,0,<,<,<,<
q49,M,M,_,_
q49,M,M,_,_,>,>,>,>
q49,1,1,_,_
q49,1,1,_,_,>,>,>,>
q49,_,_,_,0
q49,_,_,_,0,>,>,>,>
q49,_,_,_,1
qAccept,_,_,_,_,>,>,>,>
q50,0,_,_,_
q50,0,0,_,_,>,>,>,>
q50,_,_,_,_
q51,_,_,_,_,<,<,<,<
q51,_,_,M,M
q51,_,_,M,M,<,<,<,<
q51,0,0,_,_
q52,0,X,_,_,<,<,<,<
q51,1,1,_,_
q53,1,1,_,_,>,>,>,>
q52,0,0,_,_
q52,0,0,_,_,<,<,<,<
q52,1,1,_,_
q52,1,1,_,_,<,<,<,<
q52,M,M,_,_
q52,M,M,_,_,<,<,<,<
q52,_,_,_,_
q53,_,_,_,_,>,>,>,>
q52,M,_,_,_
q53,M,_,_,_,>,>,>,>
q53,0,X,_,_
q53,0,0,_,_,>,>,>,>
q53,M,M,_,_
q54,M,_,_,_,>,>,>,>
q53,_,_,_,_
q51,_,_,M,M,<,<,<,<
q53,_,_,M,M
q53,_,_,M,M,>,>,>,>
q53,1,1,_,_
q55,1,1,_,_,>,>,>,>
q54,M,M,_,_
q54,M,M,_,_,>,>,>,>
q54,1,1,_,_
q54,1,1,_,_,>,>,>,>
q54,0,0,_,_
q54,0,0,_,_,>,>,>,>
q54,0,X,_,_
q51,0,X,_,_,<,<,<,<
q55,0,X,_,_
q55,0,0,_,_,>,>,>,>
q55,_,_,M,M
q55,_,_,M,M,>,>,>,>
q55,_,_,_,M
q56,_,_,_,M,<,<,<,<
q55,_,_,_,_
q56,_,_,_,1,<,<,<,<
q55,0,0,_,_
q55,0,0,_,_,>,>,>,>
q55,0,X,_,_
q55,0,0,_,_,>,>,>,>
q56,_,_,_,_
q64,_,_,_,_,>,>,>,>
q56,_,_,M,M
q57,_,_,_,M,<,<,<,<
q56,0,0,_,_
q56,0,0,_,_,<,<,<,<
q56,1,1,_,_
q56,1,1,_,_,<,<,<,<
q56,M,M,_,_
q56,M,M,_,_,<,<,<,<
q56,M,_,_,_
q59,M,M,_,_,>,>,>,>
q57,_,_,M,M
q57,_,_,M,M,<,<,<,<
q57,0,0,_,_
q58,0,X,_,_,<,<,<,<
q57,1,1,_,_
q55,1,1,_,_,>,>,>,>
q58,M,M,_,_
q58,M,M,_,_,<,<,<,<
q58,1,1,_,_
q58,1,1,_,_,<,<,<,<
q58,_,_,_,_
q60,_,_,_,_,>,>,>,>
q58,M,_,_,_
q59,M,M,_,_,>,>,>,>
q58,0,_,_,_
q59,0,0,_,_,>,>,>,>
q58,0,0,_,_
q58,0,0,_,_,<,<,<,<
q58,_,_,_,1
q58,_,_,_,1,<,<,<,<
q58,_,_,_,M
q58,_,_,_,M,<,<,<,<
q59,1,1,_,_
q59,1,1,_,_,>,>,>,>
q59,0,X,_,_
q57,0,X,_,_,<,<,<,<
q59,M,M,_,_
q59,M,M,_,_,>,>,>,>
q59,0,0,_,_
q59,0,0,_,_,>,>,>,>
q59,_,_,_,_
q58,_,_,_,M,<,<,<,<
q59,_,_,_,M
q59,_,_,_,M,>,>,>,>
q59,_,_,_,1
q59,_,_,_,1,>,>,>,>
q60,M,M,_,_
q60,M,M,_,_,>,>,>,>
q60,1,1,_,_
q60,1,1,_,_,>,>,>,>
q60,_,_,_,M
q60,_,_,_,M,>,>,>,>
q60,_,_,_,1
q60,_,_,_,1,>,>,>,>
q60,_,_,_,_
q61,_,_,_,1,<,<,<,<
q60,0,0,_,_
q60,0,0,_,_,>,>,>,>
q61,_,_,_,M
q61,_,_,_,M,<,<,<,<
q61,_,_,_,1
q61,_,_,_,1,<,<,<,<
q61,0,0,_,_
q61,0,0,_,_,<,<,<,<
q61,1,1,_,_
q62,1,1,_,_,>,>,>,>
q61,0,X,_,_
q62,0,X,_,_,>,>,>,>
q62,_,_,_,1
qAccept,_,_,_,1,>,>,>,>
q62,0,0,_,_
q63,0,X,_,_,>,>,>,>
q62,_,_,_,M
qAccept,_,_,_,M,>,>,>,>
q63,0,0,_,_
q63,0,0,_,_,>,>,>,>
q63,_,_,_,M
q63,_,_,_,M,>,>,>,>
q63,_,_,_,1
q63,_,_,_,1,>,>,>,>
q63,_,_,_,_
q61,_,_,_,M,<,<,<,<
q64,M,M,_,_
q64,M,M,_,_,>,>,>,>
q64,0,0,_,_
q64,0,0,_,_,>,>,>,>
q64,1,1,_,_
q64,1,1,_,_,>,>,>,>
q64,_,_,_,M
q64,_,_,_,M,>,>,>,>
q64,_,_,_,1
qAccept,_,_,_,_,>,>,>,>
`;

var faktorial_4tracks = `
i:qStart
a:qAccept
qStart,1,_,_,_
qAccept,1,_,_,0,-,-,-,-
qStart,0,_,_,_
q1,0,0,0,_,>,>,>,-
q1,1,_,_,_
qAccept,1,_,_,0,-,-,-,-
q1,0,_,_,_
q2,0,_,0,_,-,-,>,-
q2,0,_,_,_
q3,0,_,_,_,-,<,<,-
q3,0,0,0,_
q3,0,0,0,0,-,>,-,>
q3,0,_,0,_
q4,0,_,0,_,-,<,-,-
q4,0,0,0,_
q4,0,0,0,_,-,<,-,-
q4,0,_,0,_
q3,0,_,0,_,-,>,<,-
q3,0,0,_,_
q5,0,0,_,_,>,-,-,-
q5,1,0,_,_
qAccept,1,0,_,_,-,-,-,-
q5,0,0,_,_
q6,0,0,_,_,-,-,-,-
q6,0,0,_,_
q6,0,_,_,_,-,>,-,-
q6,0,_,_,_
q7,0,_,_,_,-,-,-,<
q7,0,_,_,0
q7,0,0,_,_,-,>,-,<
q7,0,_,_,_
q8,0,_,_,_,-,-,-,-
q8,0,_,_,_
q9,0,_,0,_,-,-,-,-
q9,0,_,0,_
q9,0,_,0,_,-,-,>,-
q9,0,_,_,_
q10,0,_,_,_,-,<,-,-
q10,0,0,_,_
q10,0,0,_,_,-,<,-,-
q10,0,_,_,_
q3,0,_,_,_,-,>,<,-
`;

var pangkat_4tapes = `
i:q0
a:q8
q0,0,_,_,_
q0,0,0,0,_,>,>,>,-
q0,1,_,_,_
q1,1,_,_,_,>,<,<,-
q1,_,_,_,_
q8,_,_,_,_,-,-,-,-
q1,0,_,_,_
q8,0,_,_,_,-,-,-,-
q1,1,0,0,_
q8,1,0,0,0,-,-,-,-
q1,1,_,_,_
q8,1,_,_,0,-,-,-,-
q1,0,0,0,_
q2,X,0,0,_,-,-,-,-
q2,X,0,0,_
q3,X,X,0,_,-,-,-,-
q3,X,X,0,_
q3,X,X,X,0,-,-,<,>
q3,X,X,_,_
q4,X,X,_,_,-,-,>,-
q4,X,X,X,_
q4,X,X,0,_,-,-,>,-
q4,X,X,_,_
q5,X,X,_,_,-,<,<,-
q5,X,0,0,_
q3,X,X,0,_,-,-,-,-
q5,X,_,0,_
q6,X,_,0,_,>,>,-,<
q6,0,X,0,0
q7,X,X,0,0,-,-,-,-
q7,X,X,0,0
q7,X,0,0,_,-,>,-,<
q7,X,_,0,0
q7,X,0,0,_,-,>,-,<
q7,X,_,0,_
q2,X,_,0,_,-,<,-,-
q6,_,X,0,0
q8,_,X,0,0,-,-,-,-
q1,_,0,0,_
q9,X,0,0,_,-,-,-,-
q9,X,0,0,_
q9,X,0,0,0,-,-,<,>
q9,X,0,_,_
q8,X,0,_,_,-,-,-,-
`;

var logbiner_4tapes_unarytounary = `
i:q0
a:qa
q0,0,_,_,_
q0,_,0,_,_,>,<,-,-
q0,1,_,_,_
q1,_,_,_,_,>,>,-,-
q1,_,0,_,_
qa,_,0,_,1,-,-,-,-
q1,0,0,_,_
q2,_,0,_,_,>,>,>,-
q2,0,0,_,_
q2,_,0,_,_,>,>,>,-
q2,_,0,_,_
qa,_,0,_,1,-,-,-,>
q2,_,_,_,_
qa,_,_,_,0,-,-,-,>
q2,0,_,_,_
q3,0,_,_,0,<,-,<,>
q3,_,_,0,_
q3,_,0,_,_,-,>,<,-
q3,_,_,_,_
q4,_,_,_,_,>,<,-,-
q4,0,0,_,_
q4,_,0,0,_,>,<,>,-
q4,_,0,_,_
qa,_,0,_,_,-,-,-,-
q4,_,_,_,_
qa,_,_,_,0,-,-,-,>
q4,0,_,_,_
q5,0,_,_,0,<,-,<,>
q5,_,_,0,_
q5,_,0,_,_,-,<,<,-
q5,_,_,_,_
q6,_,_,_,_,>,>,-,-
q6,0,0,_,_
q6,_,0,0,_,>,>,>,-
q6,_,0,_,_
qa,_,0,_,_,-,-,-,-
q6,_,_,_,_
qa,_,_,_,0,-,-,-,>
q6,0,_,_,_
q7,0,_,_,0,<,-,<,>
q7,_,_,0,_
q7,_,0,_,_,-,>,<,-
q7,_,_,_,_
q4,_,_,_,_,>,<,-,-
`;

var logbiner_2tracks_binarytounary = `
i:q0
a:qa
q0,0,_
q0,0,_,>,>
q0,_,_
qa,_,1,-,-
q0,1,_
q1,1,_,>,>
q1,0,_
q1,0,0,>,>
q1,1,_
q1,1,0,>,>
q1,_,_
qa,_,_,-,-
`;

var akar_kuadrat_3tapes = `
i:q0
a:qa
q0,0,_,_
q0,0,_,_,<,-,-
q0,1,_,_
q1,1,_,_,<,<,<
q1,0,_,_
q1,0,_,_,<,<,<
q1,_,_,_
q2,0,_,_,-,-,-
q2,0,_,_
q2,0,0,_,>,>,>
q2,1,_,_
q3,1,_,_,<,<,<
q3,0,0,_
q3,X,0,0,<,-,<
q3,_,0,_
q4,_,0,_,>,-,-
q4,X,0,_
q4,0,0,_,>,-,-
q4,1,0,_
q3,1,_,_,<,<,-
q3,0,_,_
q5,0,_,_,>,-,-
q5,1,_,_
q6,1,_,_,>,>,>
q6,0,_,0
q6,0,_,_,>,>,>
q6,_,_,_
q7,_,_,_,<,-,-
q6,0,_,_
q0,0,_,_,<,-,-
q7,0,_,_
q7,_,_,_,<,-,-
q7,1,_,_
qa,1,_,_,-,-,-
`;