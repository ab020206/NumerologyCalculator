// Function to calculate Life Path Number
function calculateLifePathNumber(dob) {
    let dobString = dob.replace(/-/g, ''); // Remove the dash to get a continuous string of digits
    let sum = 0;

    // Sum all the digits in the date of birth
    for (let i = 0; i < dobString.length; i++) {
        sum += parseInt(dobString.charAt(i));
    }

    // Reduce to a single digit
    while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
    }

    return sum;
}

// Function to calculate Expression Number based on Name
function calculateExpressionNumber(name) {
    const nameLetters = name.toLowerCase().replace(/[^a-z]/g, '').split('');
    const letterToNumber = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 1, k: 2, l: 3, m: 4, 
        n: 5, o: 6, p: 7, q: 8, r: 9, s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8
    };

    let sum = 0;
    nameLetters.forEach(letter => {
        sum += letterToNumber[letter];
    });

    // Reduce to a single digit
    while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
    }

    return sum;
}

// Function to calculate Soul Urge Number based on Vowels
function calculateSoulUrgeNumber(name) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const nameLetters = name.toLowerCase().replace(/[^a-z]/g, '').split('');
    const letterToNumber = {
        a: 1, e: 5, i: 9, o: 6, u: 3
    };

    let sum = 0;
    nameLetters.forEach(letter => {
        if (vowels.includes(letter)) {
            sum += letterToNumber[letter];
        }
    });

    // Reduce to a single digit
    while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
    }

    return sum;
}

// Function to get the interpretation of a number
function getNumberInterpretation(number, type) {
    const interpretations = {
        1: {
            lifePath: `As a Life Path 1, you are a born leader, independent, and ambitious. You possess a strong desire to stand out and achieve greatness. 
            You have a pioneering spirit and often feel compelled to forge your own path rather than follow others. People with this number thrive in careers 
            where they can be in charge or work independently, such as entrepreneurship, politics, or leadership roles. Challenges may include stubbornness 
            and an overemphasis on self-reliance. Learning to accept help and collaborate can lead to personal growth.`,
            
            expression: `With an Expression Number of 1, you have a dynamic personality, filled with energy and drive to succeed. You are confident, innovative, 
            and have a strong will to push forward, even in tough situations. You're drawn to fields that allow you to take risks, create, and lead. However, 
            watch out for potential issues with impatience or over-assertiveness, as these can hinder your relationships. Embracing flexibility will enhance 
            your leadership abilities.`,
            
            soulUrge: `A Soul Urge Number of 1 signifies a deep-seated desire for freedom, personal growth, and independence. You have an inner drive to be the 
            best and to constantly improve yourself. You feel happiest when you’re in control of your own life. This intense need for self-assertion can 
            sometimes make it challenging to connect with others emotionally, so working on empathy can bring balance.`
        },
        2: {
            lifePath: `Life Path 2 individuals are peace-loving, cooperative, and have a knack for diplomacy. You thrive in roles that require you to 
            mediate, support, or build relationships, such as counseling, social work, or even teaching. Your empathetic nature and ability to work well 
            with others make you a valuable team player. However, you may struggle with indecisiveness and a tendency to avoid conflict, which can lead 
            to suppressed emotions. Learning to assert your needs can lead to more fulfilling connections.`,
            
            expression: `With an Expression Number 2, you are gentle, nurturing, and intuitive. You are highly aware of others' feelings, and people 
            appreciate your kindness and willingness to listen. Careers in healing, counseling, or any field that requires compassion are often fulfilling 
            for you. Sometimes, though, you may place others' needs before your own, leading to burnout. Practicing self-care is essential for maintaining balance.`,
            
            soulUrge: `Your Soul Urge Number 2 indicates a strong desire for companionship, peace, and understanding. You have an innate longing for 
            harmonious relationships and may find yourself acting as a peacemaker. However, this need for connection can lead you to avoid confrontation. 
            Embracing open communication and expressing your own needs can help create healthier connections.`
        },
        3: {
            lifePath: `Life Path 3 individuals are vibrant, expressive, and thrive in creative fields. You have a natural talent for communication and enjoy 
            sharing your ideas through art, writing, or performing. Your optimism and enthusiasm often inspire others. However, you may struggle with staying 
            grounded and can be overly self-critical. Learning to accept imperfections and focus your energies can help you realize your full potential.`,
            
            expression: `With an Expression Number 3, you are charismatic, imaginative, and likely drawn to the arts. You have a way with words and enjoy 
            connecting with others through humor and storytelling. Careers in entertainment, media, or creative roles can be fulfilling. The challenge here 
            is to avoid scattering your energy in too many directions. Discipline and focus can bring out your best talents.`,
            
            soulUrge: `A Soul Urge Number of 3 reveals a deep need for joy, beauty, and self-expression. You thrive when you can engage in creative 
            pursuits and share your talents. At times, you may feel frustrated if you can't express yourself freely. Developing emotional resilience 
            and exploring creative outlets can provide a sense of fulfillment.`
        },
        4: {
            lifePath: `Life Path 4 people are practical, organized, and value stability. You excel in fields where structure, reliability, and attention to 
            detail are essential, such as engineering, architecture, or finance. You have a strong work ethic, but may struggle with adaptability and can 
            sometimes be overly rigid. Learning to embrace change and be more flexible can lead to a balanced life.`,
            
            expression: `With an Expression Number 4, you are disciplined, dependable, and have a knack for planning. People trust you for your 
            reliability, and you often excel in tasks requiring focus and persistence. Careers in finance, law, or project management are ideal. 
            The downside can be a tendency toward perfectionism, so learning to let go and trust others is important.`,
            
            soulUrge: `A Soul Urge Number of 4 indicates a desire for order, security, and a well-structured life. You find comfort in routines and 
            stability, and often seek roles where you can create systems or processes. Sometimes, though, you may feel trapped by your need for 
            control. Embracing spontaneity can help bring balance.`
        },
        5: {
            lifePath: `As a Life Path 5, you are adventurous, freedom-loving, and constantly seeking new experiences. You thrive in environments that 
            offer excitement, variety, and the chance to learn something new. Careers that involve travel, change, or dynamic interactions, such as 
            sales, travel, or media, are often ideal. However, your need for freedom can sometimes make you restless and avoidant of long-term 
            commitments. Learning to balance spontaneity with responsibility can bring fulfillment.`,
            
            expression: `With an Expression Number 5, you are curious, adaptable, and open-minded. You love exploring new ideas and are often the life 
            of any gathering with your charm and wit. You may excel in fields that allow you to interact with diverse people or handle multiple tasks 
            at once, like journalism, entertainment, or public relations. Be cautious, though, as your adaptability can sometimes lead to lack of 
            focus. Grounding yourself in a few core goals can maximize your potential.`,
            
            soulUrge: `A Soul Urge Number of 5 reveals a deep yearning for freedom, excitement, and novelty. You are happiest when exploring new 
            places, ideas, or meeting new people. However, this intense need for variety can make it difficult to commit or stay focused. Finding 
            meaningful pursuits that allow for flexibility can help you achieve a satisfying balance.`
        },
        6: {
            lifePath: `Life Path 6 individuals are nurturing, responsible, and compassionate. You are the caregiver and thrive in roles that allow 
            you to support or uplift others, such as teaching, counseling, or healthcare. You have a strong sense of duty and often feel happiest 
            when taking care of others. However, you may sometimes neglect your own needs in the process. Remembering to set boundaries and practice 
            self-care can lead to a more balanced life.`,
            
            expression: `With an Expression Number 6, you are empathetic and dedicated. You’re often a go-to person for advice and support, and 
            people appreciate your dependability. Careers in social work, healthcare, or teaching may feel particularly fulfilling. Sometimes, 
            you can be overly concerned with others' problems, so learning to detach and focus on yourself can bring harmony.`,
            
            soulUrge: `A Soul Urge Number of 6 indicates a deep desire to care for others and create harmony. You are drawn to family, community, 
            and selfless service. Your desire to be there for others can make it hard to prioritize your own needs, so establishing clear 
            boundaries is essential. You’ll feel happiest in relationships that allow for mutual support and understanding.`
        },
        7: {
            lifePath: `As a Life Path 7, you are intellectual, introspective, and spiritual. You are driven by a desire to understand the mysteries 
            of life and often seek knowledge beyond the ordinary. Careers in research, science, philosophy, or spirituality are often ideal for you. 
            You may feel content spending time alone in reflection. However, this introspective nature can sometimes make you appear distant to 
            others. Finding ways to balance solitude with social interactions can lead to greater fulfillment.`,
            
            expression: `Expression Number 7 indicates a deep thinker with a love for knowledge and philosophy. You’re naturally drawn to research 
            and introspection, and others may seek your wisdom. Careers that allow for exploration, discovery, or analysis suit you well. 
            However, you may struggle with being overly analytical. Learning to trust your intuition can help complement your intellectual strengths.`,
            
            soulUrge: `Your Soul Urge Number of 7 means you yearn for wisdom, truth, and solitude. You feel fulfilled when exploring life's deeper 
            meanings and often prefer quiet environments. While your need for privacy is natural, embracing close relationships and sharing 
            your thoughts with trusted people can enhance your journey.`
        },
        8: {
            lifePath: `Life Path 8s are ambitious, powerful, and business-minded. You excel in positions of authority and value achievement. 
            You often have a strong presence and are skilled in managing people and resources. Careers in finance, management, or entrepreneurship 
            are well-suited for you. However, you may struggle with work-life balance or feel overly focused on material success. Embracing 
            your spiritual side can help create harmony.`,
            
            expression: `With Expression Number 8, you are disciplined and driven. You often have a strong presence and are a natural at managing 
            people and resources. Careers in management, finance, or real estate align well with your skills. However, be mindful not to let your 
            ambitions isolate you from those who care about you. Building connections beyond work can bring balance.`,
            
            soulUrge: `Your Soul Urge Number of 8 reveals a desire for success, power, and material accomplishment. You are motivated by setting 
            and achieving big goals, often striving for financial security and recognition. However, focusing solely on success may limit your 
            emotional connections. Finding fulfillment in personal relationships can help balance your life.`
        },
        9: {
            lifePath: `Life Path 9 individuals are compassionate, artistic, and humanitarians. You are motivated by a desire to make the world 
            a better place and are drawn to fields that allow you to help others. Careers in social work, the arts, or activism are often ideal 
            for you. However, you may struggle with personal boundaries and may take on too much of others' pain. Learning to care without 
            sacrificing your own well-being is essential.`,
            
            expression: `As an Expression 9, you are idealistic and creative. You naturally attract others with your open-hearted and generous 
            nature. Careers that allow you to express your compassion, such as counseling, humanitarian work, or the arts, are fulfilling. 
            Sometimes, you may struggle with disappointment if your ideals don’t align with reality. Practicing acceptance can enhance your inner peace.`,
            
            soulUrge: `Your Soul Urge Number 9 shows a deep need to help others and engage in meaningful work. You’re happiest when serving a 
            greater cause or working toward positive change. However, you may sometimes become too focused on others, neglecting your own 
            needs. Finding a balance between self-care and service will lead to a rewarding life.`
        }
    };
    

    return interpretations[number][type];
}

// Event listener for form submission
document.getElementById('numerologyForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const dob = document.getElementById('dob').value;
    const name = document.getElementById('name').value;

    if (dob && name) {
        const lifePathNumber = calculateLifePathNumber(dob);
        const expressionNumber = calculateExpressionNumber(name);
        const soulUrgeNumber = calculateSoulUrgeNumber(name);

        let resultHtml = `
            <div class="result-card">
                <h3>Life Path Number: ${lifePathNumber}</h3>
                <p>${getNumberInterpretation(lifePathNumber, 'lifePath')}</p>
            </div>
            <div class="result-card">
                <h3>Expression Number: ${expressionNumber}</h3>
                <p>${getNumberInterpretation(expressionNumber, 'expression')}</p>
            </div>
            <div class="result-card">
                <h3>Soul Urge Number: ${soulUrgeNumber}</h3>
                <p>${getNumberInterpretation(soulUrgeNumber, 'soulUrge')}</p>
            </div>
        `;

        document.getElementById('result').innerHTML = resultHtml;
    } else {
        document.getElementById('result').innerHTML = 'Please enter both a valid date of birth and full name.';
    }
});
