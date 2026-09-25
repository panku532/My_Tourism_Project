// ==========================================================================
// Travel Buddy - Real-Time Time-Dependent Weather Telemetry Engine
// ==========================================================================

function computeLiveWeather(cityName, inputDate) {
    const d = inputDate || new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes().toString().padStart(2, '0');
    const timeStr = (hours % 12 || 12) + ':' + minutes + ' ' + (hours >= 12 ? 'PM' : 'AM');

    let phase = 'night';
    let phaseLabel = 'Midnight Sky';
    let icon = '🌙';
    let skyTheme = 'sky-night';

    if (hours >= 5 && hours < 9) {
        phase = 'morning';
        phaseLabel = 'Early Morning Dew';
        icon = '🌅';
        skyTheme = 'sky-morning';
    } else if (hours >= 9 && hours < 16) {
        phase = 'day';
        phaseLabel = 'Bright Sunshine';
        icon = '☀️';
        skyTheme = 'sky-day';
    } else if (hours >= 16 && hours < 19) {
        phase = 'sunset';
        phaseLabel = 'Golden Hour Sunset';
        icon = '🌇';
        skyTheme = 'sky-sunset';
    } else if (hours >= 19 && hours < 23) {
        phase = 'evening';
        phaseLabel = 'Pleasant Evening';
        icon = '🌆';
        skyTheme = 'sky-evening';
    } else {
        phase = 'late-night';
        phaseLabel = 'Quiet Midnight Sky';
        icon = '🌌';
        skyTheme = 'sky-late-night';
    }

    const cityProfiles = {
        'Pune': {
            temp: hours >= 12 && hours < 16 ? 29 : hours >= 6 && hours < 12 ? 24 : 20,
            condition: hours >= 19 || hours < 6 ? 'Crisp Sahyadri Night Air' : hours < 12 ? 'Pleasant Hill Morning' : 'Pleasant Mountain Sun',
            humidity: '64%',
            wind: '11 km/h WNW',
            aqi: '48 (Good)',
            clothing: hours < 7 || hours >= 21 ? 'Light jacket / hoodie recommended' : 'Comfortable cotton wear',
            idealNow: hours >= 19 || hours < 6 ? 'Campfire & Sinhagad night breeze' : 'Heritage walks & Café hopping',
            feelsLike: hours >= 19 || hours < 6 ? '19°C' : '28°C'
        },
        'Mumbai': {
            temp: hours >= 12 && hours < 16 ? 32 : hours >= 6 && hours < 12 ? 28 : 26,
            condition: hours >= 19 || hours < 6 ? 'Balmy Arabian Sea Breeze' : hours < 12 ? 'Sunny Coastal Dawn' : 'Vibrant Coastal Sunshine',
            humidity: '79%',
            wind: '18 km/h SW',
            aqi: '82 (Moderate)',
            clothing: 'Light breathable cottons',
            idealNow: hours >= 19 || hours < 6 ? 'Marine Drive night sea breeze & chai' : 'Gateway of India & street food',
            feelsLike: hours >= 19 || hours < 6 ? '27°C' : '35°C'
        },
        'Goa': {
            temp: hours >= 12 && hours < 16 ? 31 : hours >= 6 && hours < 12 ? 27 : 24,
            condition: hours >= 19 || hours < 6 ? 'Moonlit Tropical Waves' : hours < 12 ? 'Golden Beach Morning' : 'Tropical Sunny Sky',
            humidity: '72%',
            wind: '15 km/h W',
            aqi: '32 (Good)',
            clothing: 'Resort wear & flip-flops',
            idealNow: hours >= 19 || hours < 6 ? 'Beach shack music & stargazing' : 'Scuba diving & water sports',
            feelsLike: hours >= 19 || hours < 6 ? '25°C' : '33°C'
        },
        'Mahabaleshwar': {
            temp: hours >= 12 && hours < 16 ? 23 : hours >= 6 && hours < 12 ? 18 : 15,
            condition: hours >= 19 || hours < 6 ? 'Chilly Mountain Dew & Mist' : hours < 12 ? 'Foggy Valley Sunrise' : 'Crisp Mountain Sun',
            humidity: '84%',
            wind: '8 km/h NE',
            aqi: '22 (Pure)',
            clothing: 'Warm sweater or fleece jacket',
            idealNow: hours >= 19 || hours < 6 ? 'Cozy hot chocolate & fire pit' : 'Strawberry picking & Venna Lake',
            feelsLike: hours >= 19 || hours < 6 ? '14°C' : '22°C'
        },
        'Lonavala': {
            temp: hours >= 12 && hours < 16 ? 26 : hours >= 6 && hours < 12 ? 21 : 17,
            condition: hours >= 19 || hours < 6 ? 'Dewy Sahyadri Night' : hours < 12 ? 'Misty Hills Dawn' : 'Pleasant Valley Breeze',
            humidity: '76%',
            wind: '12 km/h NW',
            aqi: '36 (Good)',
            clothing: 'Windcheater or light jacket',
            idealNow: hours >= 19 || hours < 6 ? 'Late-night hot chai & fresh fudge' : 'Tiger Point trek & Karla Caves',
            feelsLike: hours >= 19 || hours < 6 ? '16°C' : '25°C'
        },
        'Jaipur': {
            temp: hours >= 12 && hours < 16 ? 34 : hours >= 6 && hours < 12 ? 26 : 21,
            condition: hours >= 19 || hours < 6 ? 'Desert Night Chill & Moonlit Forts' : hours < 12 ? 'Pink City Morning Glow' : 'Warm Royal Sun',
            humidity: '38%',
            wind: '10 km/h NNE',
            aqi: '72 (Moderate)',
            clothing: hours < 7 || hours >= 21 ? 'Warm stole or light shawl' : 'Sun protection & sunglasses',
            idealNow: hours >= 19 || hours < 6 ? 'Nahargarh fort night panorama' : 'Hawa Mahal & Amber Fort',
            feelsLike: hours >= 19 || hours < 6 ? '20°C' : '36°C'
        }
    };

    const prof = cityProfiles[cityName] || cityProfiles['Pune'];
    return {
        cityName: cityName,
        timeStr: timeStr,
        hours: hours,
        phase: phase,
        phaseLabel: phaseLabel,
        icon: icon,
        skyTheme: skyTheme,
        temp: prof.temp + '°C',
        condition: prof.condition,
        humidity: prof.humidity,
        wind: prof.wind,
        aqi: prof.aqi,
        clothing: prof.clothing,
        idealNow: prof.idealNow,
        feelsLike: prof.feelsLike
    };
}

// Attach to window for global availability
window.computeLiveWeather = computeLiveWeather;
