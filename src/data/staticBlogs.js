// ─── Static Blog Data ─────────────────────────────────────────────────────────
// Each entry has a fixed slug/id and language-specific content (en / ta).
// Components flatten this into the shape the rest of the UI expects.

export const staticBlogsData = [
  {
    id: 1,
    slug: 'understanding-stroke',
    cover_image_url: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=1200&q=80',
    author: 'JP Neuro Spine Hospital and Pain Management Centre',
    created_at: '2026-01-15T00:00:00.000Z',
    en: {
      title: 'Understanding Stroke: Causes, Symptoms & Treatment',
      excerpt:
        'A stroke is a life-threatening emergency that occurs when blood flow to part of the brain is suddenly disrupted. Recognising the warning signs early can save lives.',
      content: `
<h2>What is a Stroke?</h2>
<p>A stroke occurs when blood supply to part of the brain is suddenly cut off, or when a blood vessel in the brain bursts. Brain cells begin to die within minutes without oxygen, making stroke a life-threatening emergency that demands immediate medical attention.</p>

<h2>Types of Stroke</h2>
<p>There are two main types: <strong>ischaemic stroke</strong>, caused by a blood clot blocking an artery to the brain (accounting for about 80% of all strokes), and <strong>haemorrhagic stroke</strong>, caused by a burst blood vessel bleeding into the brain.</p>

<h2>Recognising the Warning Signs — FAST</h2>
<p>The FAST acronym helps identify stroke quickly:</p>
<ul>
  <li><strong>Face</strong> – Does one side droop when the person smiles?</li>
  <li><strong>Arms</strong> – Can both arms be raised equally, or does one drift down?</li>
  <li><strong>Speech</strong> – Is speech slurred or confused?</li>
  <li><strong>Time</strong> – Call emergency services immediately. Every minute counts.</li>
</ul>

<h2>Risk Factors</h2>
<p>High blood pressure is the leading risk factor. Others include diabetes, high cholesterol, smoking, obesity, atrial fibrillation, and a sedentary lifestyle. Many strokes are preventable through lifestyle modifications and appropriate medication.</p>

<h2>Treatment & Recovery</h2>
<p>Ischaemic strokes can be treated with clot-dissolving medication (thrombolysis) or mechanical clot removal (thrombectomy) when administered promptly. Rehabilitation — including physiotherapy, speech therapy, and occupational therapy — plays a critical role in recovery. At JP Neuro Spine Hospital and Pain Management Centre, our multidisciplinary team provides comprehensive stroke care from emergency management through to long-term rehabilitation, giving every patient the best possible chance of a meaningful recovery.</p>
      `.trim(),
    },
    ta: {
      title: 'பக்கவாதம்: காரணங்கள், அறிகுறிகள் மற்றும் சிகிச்சை',
      excerpt:
        'பக்கவாதம் என்பது மூளைக்கு இரத்த ஓட்டம் திடீரென தடைபடும்போது ஏற்படும் உயிருக்கு ஆபத்தான மருத்துவ அவசரநிலை. ஆரம்பத்திலேயே எச்சரிக்கை அறிகுறிகளை கண்டறிவது உயிரைக் காப்பாற்றலாம்.',
      content: `
<h2>பக்கவாதம் என்றால் என்ன?</h2>
<p>மூளையின் ஒரு பகுதிக்கு இரத்த வழங்கல் திடீரென தடைபடும்போது அல்லது மூளையில் ஒரு இரத்த நாளம் வெடிக்கும்போது பக்கவாதம் ஏற்படுகிறது. ஆக்சிஜன் இல்லாமல் சில நிமிடங்களில் மூளை செல்கள் இறக்கத் தொடங்குகின்றன, இதனால் இது உடனடி மருத்துவ கவனிப்பு தேவைப்படும் உயிருக்கு ஆபத்தான அவசரநிலையாகும்.</p>

<h2>பக்கவாதத்தின் வகைகள்</h2>
<p>இரண்டு முக்கிய வகைகள் உள்ளன: <strong>இஸ்கிமிக் பக்கவாதம்</strong>, இரத்த உறைவால் மூளைக்கு செல்லும் தமனி அடைக்கப்படுவதால் ஏற்படுகிறது (அனைத்து பக்கவாதங்களில் சுமார் 80%), மற்றும் <strong>ஹீமோரேஜிக் பக்கவாதம்</strong>, வெடித்த இரத்த நாளம் மூளையில் இரத்தக்கசிவை ஏற்படுத்துவதால் வருகிறது.</p>

<h2>எச்சரிக்கை அறிகுறிகள் — FAST</h2>
<p>FAST என்ற குறியீடு பக்கவாதத்தை விரைவாக அடையாளம் காண உதவுகிறது:</p>
<ul>
  <li><strong>முகம் (Face)</strong> – சிரிக்கும்போது ஒரு பக்கம் தொங்குகிறதா?</li>
  <li><strong>கைகள் (Arms)</strong> – இரு கைகளையும் சமமாக உயர்த்த முடியுமா? ஒன்று கீழே விழுகிறதா?</li>
  <li><strong>பேச்சு (Speech)</strong> – பேச்சு தடுமாறுகிறதா அல்லது குழப்பமாக இருக்கிறதா?</li>
  <li><strong>நேரம் (Time)</strong> – உடனடியாக அவசர சேவைகளை அழையுங்கள். ஒவ்வொரு நிமிடமும் முக்கியம்.</li>
</ul>

<h2>ஆபத்து காரணிகள்</h2>
<p>உயர் இரத்த அழுத்தம் முக்கிய ஆபத்து காரணியாகும். மற்றவை: நீரிழிவு நோய், அதிக கொழுப்பு, புகைபிடிப்பு, உடல் பருமன், இதய நோய் மற்றும் உடல் உழைப்பின்மை. பல பக்கவாதங்கள் வாழ்க்கை முறை மாற்றங்கள் மற்றும் மருந்துகள் மூலம் தடுக்கலாம்.</p>

<h2>சிகிச்சை மற்றும் மீட்சி</h2>
<p>இஸ்கிமிக் பக்கவாதத்தை உறைவு கரைக்கும் மருந்து (தரம்போலிசிஸ்) அல்லது இயந்திர உறைவு அகற்றல் (தரம்போக்டமி) மூலம் விரைவாக சிகிச்சையளிக்கலாம். மறுவாழ்வு — இயல்நிலை சிகிச்சை, பேச்சு சிகிச்சை மற்றும் தொழிலாக சிகிச்சை உட்பட — மீட்சியில் முக்கிய பங்கு வகிக்கிறது. JP Neuro Spine Hospital and Pain Management Centre-இல், எங்கள் பல்துறை குழு அவசர மேலாண்மையிலிருந்து நீண்டகால மறுவாழ்வு வரை விரிவான பக்கவாத சிகிச்சை அளிக்கிறது.</p>
      `.trim(),
    },
  },

  {
    id: 2,
    slug: 'head-injury-when-to-seek-care',
    cover_image_url: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1200&q=80',
    author: 'JP Neuro Spine Hospital and Pain Management Centre',
    created_at: '2026-02-10T00:00:00.000Z',
    en: {
      title: 'Head Injury: When to Seek Immediate Medical Care',
      excerpt:
        'Head injuries range from mild concussions to severe traumatic brain injuries. Knowing the warning signs can mean the difference between full recovery and permanent damage.',
      content: `
<h2>Understanding Head Injuries</h2>
<p>Head injuries range from mild concussions to severe traumatic brain injuries (TBI). They can result from falls, road traffic accidents, sports injuries, or workplace accidents. Even injuries that appear minor can sometimes carry serious consequences, making prompt medical evaluation essential in all cases.</p>

<h2>Types of Head Injury</h2>
<p><strong>Concussion</strong> is the most common type, caused by a blow that temporarily disrupts brain function. <strong>Contusion</strong> refers to bruising of brain tissue at the impact site. <strong>Intracranial haematoma</strong> involves a collection of blood inside the skull — a potentially life-threatening condition requiring emergency intervention. <strong>Skull fractures</strong> may or may not be accompanied by underlying brain injury.</p>

<h2>Warning Signs — Seek Care Immediately</h2>
<p>Do not delay — go to an emergency department if you notice:</p>
<ul>
  <li>Loss of consciousness, even briefly</li>
  <li>Worsening headache or persistent vomiting</li>
  <li>Confusion, memory loss, or unusual behaviour</li>
  <li>Weakness, numbness, or seizures</li>
  <li>Clear fluid draining from the nose or ears</li>
  <li>Unequal pupil sizes</li>
</ul>

<h2>Diagnosis & Treatment</h2>
<p>CT scans and MRI are the key diagnostic tools for assessing head injuries. Treatment depends on severity — mild injuries may require only rest and observation, while severe injuries may need surgical intervention to relieve pressure on the brain or repair damaged vessels.</p>

<h2>Expert Care at JP Neuro Spine Hospital and Pain Management Centre</h2>
<p>Our neurosurgical team at JP Neuro Spine Hospital and Pain Management Centre is fully equipped to manage all grades of head injury — from emergency triage and stabilisation, through complex neurosurgical procedures, to comprehensive post-operative rehabilitation. Early expert intervention significantly improves patient outcomes and quality of life.</p>
      `.trim(),
    },
    ta: {
      title: 'தலை காயம்: எப்போது உடனடி மருத்துவ உதவி தேவை?',
      excerpt:
        'தலை காயங்கள் சிறிய மயக்கங்களிலிருந்து கடுமையான மூளை அதிர்ச்சி காயங்கள் வரை வேறுபடுகின்றன. எச்சரிக்கை அறிகுறிகளை அறிவது முழு மீட்சிக்கும் நிரந்தர சேதத்திற்கும் இடையிலான வித்தியாசத்தை உருவாக்கலாம்.',
      content: `
<h2>தலை காயங்களைப் புரிந்துகொள்வோம்</h2>
<p>தலை காயங்கள் சிறிய மயக்கங்களிலிருந்து கடுமையான மூளை அதிர்ச்சி காயங்கள் (TBI) வரை வேறுபடுகின்றன. இவை வீழ்ச்சிகள், சாலை விபத்துகள், விளையாட்டு காயங்கள் அல்லது தொழிலிட விபத்துகளால் ஏற்படலாம். சிறிய காயமாகத் தோன்றும் சில காயங்களும் சில நேரங்களில் தீவிர விளைவுகளை ஏற்படுத்தலாம், எனவே அனைத்து சந்தர்ப்பங்களிலும் உடனடி மருத்துவ மதிப்பீடு அவசியம்.</p>

<h2>தலை காயங்களின் வகைகள்</h2>
<p><strong>மயக்கம் (Concussion)</strong> மிகவும் பொதுவான வகை, தாக்கத்தால் மூளை செயல்பாடு தற்காலிகமாக பாதிக்கப்படுகிறது. <strong>Contusion</strong> என்பது தாக்கம் ஏற்பட்ட இடத்தில் மூளை திசுக்களில் காயம். <strong>Intracranial haematoma</strong> என்பது மண்டையோட்டுக்கு உள்ளே இரத்தம் தேங்குவது — அவசர தலையீடு தேவைப்படும் உயிருக்கு ஆபத்தான நிலை. <strong>மண்டையோடு முறிவு</strong> மூளை காயத்துடன் அல்லது இல்லாமலும் இருக்கலாம்.</p>

<h2>எச்சரிக்கை அறிகுறிகள் — உடனடியாக சிகிச்சை நாடுங்கள்</h2>
<p>தாமதிக்காதீர்கள் — பின்வரும் அறிகுறிகள் தோன்றினால் உடனடியாக அவசர சிகிச்சை பெறுங்கள்:</p>
<ul>
  <li>சிறிது நேரமாக இருந்தாலும் சுயநினைவு இழப்பு</li>
  <li>மோசமடைந்து வரும் தலைவலி அல்லது தொடர் வாந்தி</li>
  <li>குழப்பம், நினைவு மறதி அல்லது அசாதாரண நடத்தை</li>
  <li>பலவீனம், உணர்வின்மை அல்லது வலிப்பு</li>
  <li>மூக்கு அல்லது காதுகளிலிருந்து தெளிவான திரவம் வருவது</li>
  <li>சமச்சீரற்ற கண்விழி அளவுகள்</li>
</ul>

<h2>நோய் கண்டறிதல் மற்றும் சிகிச்சை</h2>
<p>CT ஸ்கேன் மற்றும் MRI ஆகியவை தலை காயங்களை மதிப்பிடுவதற்கான முக்கிய கண்டறிதல் கருவிகளாகும். சிகிச்சை தீவிரத்தன்மையைப் பொறுத்தது — லேசான காயங்களுக்கு ஓய்வும் கண்காணிப்பும் மட்டும் தேவைப்படலாம், அதே நேரம் கடுமையான காயங்களுக்கு மூளையில் அழுத்தத்தை குறைக்க அல்லது சேதமடைந்த இரத்த நாளங்களை சரிசெய்ய அறுவை சிகிச்சை தேவைப்படலாம்.</p>

<h2>JP Neuro Spine Hospital and Pain Management Centre-இல் நிபுணர் சிகிச்சை</h2>
<p>JP Neuro Spine Hospital and Pain Management Centre-இல் எங்கள் நரம்பியல் அறுவை சிகிச்சை குழு அனைத்து தரங்களிலான தலை காயங்களையும் கையாள்வதற்கு தயாராக உள்ளது — அவசர சிகிச்சையிலிருந்து சிக்கலான அறுவை சிகிச்சை முறைகள் மற்றும் அறுவை சிகிச்சைக்கு பிந்தைய முழுமையான மறுவாழ்வு வரை. ஆரம்பகால நிபுணர் தலையீடு நோயாளிகளின் முடிவுகளை கணிசமாக மேம்படுத்துகிறது.</p>
      `.trim(),
    },
  },

  {
    id: 3,
    slug: 'spinal-cord-injury-recovery-and-hope',
    cover_image_url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
    author: 'JP Neuro Spine Hospital and Pain Management Centre',
    created_at: '2026-03-05T00:00:00.000Z',
    en: {
      title: 'Spinal Cord Injury: Recovery, Rehabilitation & Hope',
      excerpt:
        'Spinal cord injuries can be life-altering, but advances in surgical techniques and rehabilitation mean that many patients achieve significant functional recovery with expert care.',
      content: `
<h2>What is a Spinal Cord Injury?</h2>
<p>A spinal cord injury (SCI) occurs when damage to the spinal cord disrupts the communication pathways between the brain and the body. This can result in partial or complete loss of motor function, sensation, and autonomic control below the level of injury. SCIs are most commonly caused by trauma from road accidents, falls, sports injuries, or violence.</p>

<h2>Classification of Injury</h2>
<p>SCIs are classified as <strong>complete</strong> — where there is total loss of function below the injury level — or <strong>incomplete</strong> — where partial function is preserved. The location of injury determines which systems are affected: <strong>cervical</strong> (neck) injuries may affect all four limbs and breathing, <strong>thoracic</strong> (chest) injuries typically affect the legs and trunk, while <strong>lumbar</strong> (lower back) injuries affect the legs and bladder.</p>

<h2>Immediate Symptoms to Watch For</h2>
<ul>
  <li>Sudden weakness or paralysis of the limbs</li>
  <li>Loss of sensation or abnormal tingling sensations</li>
  <li>Difficulty breathing (in cervical injuries)</li>
  <li>Loss of bladder or bowel control</li>
  <li>Severe neck or back pain following trauma</li>
</ul>

<h2>Treatment Approach</h2>
<p>Emergency stabilisation is the immediate priority to prevent further spinal damage. Surgical decompression and spinal stabilisation are often necessary. In acute SCI, corticosteroids may be administered to reduce inflammation and limit secondary injury.</p>

<h2>Rehabilitation & Recovery</h2>
<p>Rehabilitation is central to maximising recovery from SCI. A structured programme including physiotherapy, occupational therapy, and assistive technology training helps patients regain independence and quality of life. At JP Neuro Spine Hospital and Pain Management Centre, our expert multidisciplinary team combines surgical excellence with comprehensive rehabilitation, supporting patients through every stage of their recovery journey with compassion, skill, and the latest advances in neuro-rehabilitative care.</p>
      `.trim(),
    },
    ta: {
      title: 'முதுகு தண்டு காயம்: மறுவாழ்வு மற்றும் நம்பிக்கை',
      excerpt:
        'முதுகு தண்டு காயங்கள் வாழ்க்கையை மாற்றக்கூடியவை, ஆனால் அறுவை சிகிச்சை நுட்பங்கள் மற்றும் மறுவாழ்வில் முன்னேற்றங்கள் நிபுணர் சிகிச்சையுடன் பல நோயாளிகள் கணிசமான செயல்பாட்டு மீட்சி அடைவதற்கு வழிவகுக்கின்றன.',
      content: `
<h2>முதுகு தண்டு காயம் என்றால் என்ன?</h2>
<p>முதுகு தண்டு காயம் (SCI) என்பது முதுகு தண்டுவடத்திற்கு சேதம் ஏற்படும்போது மூளைக்கும் உடலுக்கும் இடையிலான தொடர்பு பாதைகள் தடைபடுகின்றன. இது காயம் உள்ள இடத்திற்கு கீழே மோட்டார் செயல்பாடு, உணர்வு மற்றும் தன்னியக்க கட்டுப்பாட்டை பகுதியாகவோ அல்லது முழுமையாகவோ இழக்க வழிவகுக்கும். சாலை விபத்துகள், வீழ்ச்சிகள், விளையாட்டு காயங்கள் அல்லது வன்முறை ஆகியவை SCI-க்கு பொதுவான காரணங்கள்.</p>

<h2>காயத்தின் வகைப்பாடு</h2>
<p>SCI-களை <strong>முழுமையான</strong> — காயம் உள்ள இடத்திற்கு கீழே முழு செயல்பாடு இழப்பு — அல்லது <strong>முழுமையற்ற</strong> — செயல்பாட்டின் பகுதி பாதுகாப்பு — என வகைப்படுத்தலாம். காயத்தின் இடம் எந்த அமைப்புகள் பாதிக்கப்படுகின்றன என்பதை நிர்ணயிக்கிறது: <strong>கழுத்து (cervical)</strong> காயங்கள் நான்கு உறுப்புகளையும் சுவாசத்தையும் பாதிக்கலாம்; <strong>மார்பு (thoracic)</strong> காயங்கள் பொதுவாக கால்கள் மற்றும் உடற்பகுதியை பாதிக்கின்றன; <strong>இடுப்பு (lumbar)</strong> காயங்கள் கால்கள் மற்றும் சிறுநீர்ப்பையை பாதிக்கின்றன.</p>

<h2>கவனிக்க வேண்டிய உடனடி அறிகுறிகள்</h2>
<ul>
  <li>கைகால்களில் திடீர் பலவீனம் அல்லது வாதம்</li>
  <li>உணர்வு இழப்பு அல்லது அசாதாரண கூச்ச உணர்வுகள்</li>
  <li>சுவாசிக்க சிரமம் (கழுத்து காயங்களில்)</li>
  <li>சிறுநீர்ப்பை அல்லது குடல் கட்டுப்பாட்டை இழப்பு</li>
  <li>அதிர்ச்சிக்கு பிறகு கடுமையான கழுத்து அல்லது முதுகு வலி</li>
</ul>

<h2>சிகிச்சை அணுகுமுறை</h2>
<p>மேலும் முதுகெலும்பு சேதத்தை தடுக்க அவசர நிலைப்படுத்தல் உடனடி முன்னுரிமை. அறுவை சிகிச்சை இறுக்கம் நீக்கல் மற்றும் முதுகெலும்பு நிலைப்படுத்தல் பெரும்பாலும் தேவைப்படும். கடுமையான SCI-யில், வீக்கத்தை குறைக்கவும் இரண்டாம் நிலை காயத்தை கட்டுப்படுத்தவும் கார்டிகோஸ்டெராய்டுகள் வழங்கப்படலாம்.</p>

<h2>மறுவாழ்வும் மீட்சியும்</h2>
<p>SCI-யிலிருந்து மீட்சியை அதிகரிக்க மறுவாழ்வு மிக முக்கியம். இயல்நிலை சிகிச்சை, தொழிலாக சிகிச்சை மற்றும் உதவி தொழில்நுட்ப பயிற்சி உள்ளிட்ட கட்டமைக்கப்பட்ட திட்டம் நோயாளிகள் சுதந்திரத்தையும் வாழ்க்கைத் தரத்தையும் மீண்டும் பெற உதவுகிறது. JP Neuro Spine Hospital and Pain Management Centre-இல், எங்கள் நிபுணர் பல்துறை குழு அறுவை சிகிச்சை சிறப்பை விரிவான மறுவாழ்வுடன் இணைத்து, இரக்கத்துடனும் திறமையுடனும் நோயாளிகளை வழிகாட்டுகிறது.</p>
      `.trim(),
    },
  },

  {
    id: 4,
    slug: 'disc-bulge-causes-symptoms-treatment',
cover_image_url: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80',
    author: 'JP Neuro Spine Hospital and Pain Management Centre',
    created_at: '2026-03-18T00:00:00.000Z',
    en: {
      title: 'Disc Bulge: Causes, Symptoms & Treatment Options',
      excerpt:
        'A disc bulge is one of the most common causes of back and neck pain. Understanding the condition helps you seek the right treatment before it progresses to a herniation.',
      content: `
<h2>What is a Disc Bulge?</h2>
<p>The spine is cushioned by intervertebral discs — flat, round pads filled with a gel-like nucleus surrounded by a tough outer ring (annulus fibrosus). A disc bulge occurs when the disc extends beyond its normal boundary and protrudes outward, pressing on nearby nerves or the spinal canal. Unlike a herniation, the outer ring remains intact in a bulge.</p>

<h2>Common Causes</h2>
<p>Disc bulges are largely age-related, as discs lose water content and elasticity over time. Other contributing factors include poor posture, repetitive bending or lifting, prolonged sitting, obesity, and smoking. Sudden trauma can also trigger or worsen a bulge.</p>

<h2>Symptoms</h2>
<ul>
  <li>Localised or radiating back or neck pain</li>
  <li>Numbness, tingling, or weakness in the arms or legs</li>
  <li>Pain that worsens with prolonged sitting, bending, or coughing</li>
  <li>Reduced range of motion</li>
  <li>In severe cases, bladder or bowel dysfunction</li>
</ul>

<h2>Diagnosis</h2>
<p>MRI is the gold standard for diagnosing disc bulges, clearly showing the extent of protrusion and any nerve compression. X-rays may be used to rule out other bony causes, while nerve conduction studies can assess the degree of nerve involvement.</p>

<h2>Treatment</h2>
<p>Most disc bulges respond well to conservative management — physiotherapy, anti-inflammatory medication, activity modification, and targeted exercises to strengthen core muscles. Epidural steroid injections can provide relief when pain is severe. Surgery is reserved for cases with significant nerve compression or failure of conservative therapy. At JP Neuro Spine Hospital and Pain Management Centre, our specialists tailor treatment to each patient, achieving the best possible outcome with the least invasive approach.</p>
      `.trim(),
    },
    ta: {
      title: 'டிஸ்க் பல்ஜ்: காரணங்கள், அறிகுறிகள் மற்றும் சிகிச்சை',
      excerpt:
        'டிஸ்க் பல்ஜ் என்பது முதுகு மற்றும் கழுத்து வலிக்கான மிகவும் பொதுவான காரணங்களில் ஒன்றாகும். நிலைமையை புரிந்துகொள்வது, அது மோசமடைவதற்கு முன்பே சரியான சிகிச்சை பெற உதவுகிறது.',
      content: `
<h2>டிஸ்க் பல்ஜ் என்றால் என்ன?</h2>
<p>முதுகெலும்பு, கெல் போன்ற உள்ளடக்கத்தை கொண்ட தட்டையான, வட்டமான திண்டுகளால் — intervertebral discs — குஷன் செய்யப்படுகிறது. டிஸ்க் பல்ஜ் என்பது டிஸ்க் அதன் இயல்பான எல்லைக்கு அப்பால் நீட்டி, அருகில் உள்ள நரம்புகள் அல்லது முதுகெலும்பு கால்வாயை அழுத்தும்போது ஏற்படுகிறது. ஹெர்னியேஷனில் இருந்து வேறுபட்டு, பல்ஜில் வெளி வளையம் அப்படியே இருக்கும்.</p>

<h2>பொதுவான காரணங்கள்</h2>
<p>டிஸ்க் பல்ஜ்கள் பெரும்பாலும் வயது தொடர்பானவை, ஏனெனில் டிஸ்க்குகள் காலப்போக்கில் நீர் உள்ளடக்கத்தை மற்றும் நெகிழ்திறனை இழக்கின்றன. தவறான தோரணை, மீண்டும் மீண்டும் குனிதல் அல்லது தூக்குதல், நீண்ட நேரம் உட்காருதல், உடல் பருமன் மற்றும் புகைபிடிப்பு ஆகியவை மற்ற காரணிகளாகும்.</p>

<h2>அறிகுறிகள்</h2>
<ul>
  <li>உள்ளூர் அல்லது பரவும் முதுகு அல்லது கழுத்து வலி</li>
  <li>கைகள் அல்லது கால்களில் உணர்வின்மை, கூச்சம் அல்லது பலவீனம்</li>
  <li>நீண்ட நேரம் உட்காருவது, குனிவது அல்லது இருமல் போடும்போது மோசமடையும் வலி</li>
  <li>குறைக்கப்பட்ட அசைவு வீச்சு</li>
  <li>கடுமையான நிலைகளில், சிறுநீர்ப்பை அல்லது குடல் செயலிழப்பு</li>
</ul>

<h2>நோய் கண்டறிதல்</h2>
<p>MRI என்பது டிஸ்க் பல்ஜ்களை கண்டறிவதற்கான சிறந்த முறையாகும், இது வெளிப்படுதலின் அளவு மற்றும் நரம்பு சுருக்கத்தை தெளிவாக காட்டுகிறது. X-ray மற்ற எலும்பு காரணங்களை நிராகரிக்க பயன்படுத்தப்படலாம்.</p>

<h2>சிகிச்சை</h2>
<p>பெரும்பாலான டிஸ்க் பல்ஜ்கள் பழமையான மேலாண்மைக்கு நன்றாக பதிலளிக்கின்றன — இயல்நிலை சிகிச்சை, அழற்சி எதிர்ப்பு மருந்துகள், செயல்பாட்டு மாற்றம் மற்றும் மையப் தசைகளை வலுப்படுத்த இலக்கு வைத்த பயிற்சிகள். Epidural steroid injections வலி கடுமையாக இருக்கும்போது நிவாரணம் வழங்கலாம். JP Neuro Spine Hospital and Pain Management Centre-இல், எங்கள் நிபுணர்கள் ஒவ்வொரு நோயாளிக்கும் சிகிச்சையை தனிப்பயனாக்குகிறார்கள்.</p>
      `.trim(),
    },
  },

  {
    id: 5,
    slug: 'migraine-understanding-and-management',
    cover_image_url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
    author: 'JP Neuro Spine Hospital and Pain Management Centre',
    created_at: '2026-03-25T00:00:00.000Z',
    en: {
      title: 'Migraine: Understanding the Condition & Finding Relief',
      excerpt:
        'Migraine is far more than a bad headache. It is a complex neurological condition that affects millions worldwide and can significantly impact daily life — but it is treatable.',
      content: `
<h2>What is Migraine?</h2>
<p>Migraine is a complex neurological disorder characterised by recurrent episodes of moderate to severe headache, typically on one side of the head. It often involves a throbbing or pulsating pain that worsens with physical activity and is frequently accompanied by nausea, vomiting, and extreme sensitivity to light and sound. Attacks can last from 4 to 72 hours.</p>

<h2>Phases of a Migraine</h2>
<p>A migraine episode can progress through four stages: the <strong>prodrome</strong> (subtle changes hours before, such as mood shifts or food cravings), the <strong>aura</strong> (visual disturbances, tingling, or speech difficulties in about one-third of patients), the <strong>headache phase</strong>, and the <strong>postdrome</strong> (a "hangover" feeling of fatigue and cognitive fog).</p>

<h2>Common Triggers</h2>
<ul>
  <li>Hormonal changes (especially in women)</li>
  <li>Stress and poor sleep patterns</li>
  <li>Certain foods — aged cheese, caffeine, alcohol</li>
  <li>Bright lights, loud noise, or strong smells</li>
  <li>Dehydration and skipping meals</li>
</ul>

<h2>Diagnosis</h2>
<p>Migraine is primarily a clinical diagnosis based on history and symptom pattern. Neuroimaging (MRI or CT) is recommended when there are atypical features or red flags such as sudden-onset severe headache, neurological deficits, or headache that worsens progressively.</p>

<h2>Treatment & Prevention</h2>
<p>Treatment includes acute relief medications (triptans, NSAIDs) and preventive therapies (beta-blockers, antidepressants, anti-epileptics, or newer CGRP inhibitors). Lifestyle management — regular sleep, hydration, stress control, and avoiding known triggers — is equally important. At JP Neuro Spine Hospital and Pain Management Centre, our neurologists offer a personalised migraine management plan combining the latest evidence-based therapies with compassionate care.</p>
      `.trim(),
    },
    ta: {
      title: 'ஒற்றைத் தலைவலி: நிலைமையை புரிந்துகொண்டு நிவாரணம் பெறுவோம்',
      excerpt:
        'ஒற்றைத் தலைவலி என்பது வெறும் கடுமையான தலைவலியை விட மிகவும் அதிகமானது. இது உலகளவில் கோடிக்கணக்கானவர்களை பாதிக்கும் ஒரு சிக்கலான நரம்பியல் நிலை — ஆனால் சிகிச்சையளிக்க முடியும்.',
      content: `
<h2>ஒற்றைத் தலைவலி என்றால் என்ன?</h2>
<p>ஒற்றைத் தலைவலி என்பது மீண்டும் மீண்டும் வரும் மிதமான முதல் கடுமையான தலைவலி எபிசோட்களால் வகைப்படுத்தப்படும் ஒரு சிக்கலான நரம்பியல் கோளாறு, பொதுவாக தலையின் ஒரு பக்கத்தில். இது பெரும்பாலும் உடல் செயல்பாட்டுடன் மோசமடையும் துடிக்கும் வலியை உள்ளடக்கியது மற்றும் குமட்டல், வாந்தி, மற்றும் ஒளி மற்றும் ஒலியின் தீவிர உணர்திறனுடன் கூடியது. தாக்குதல்கள் 4 முதல் 72 மணி நேரம் வரை நீடிக்கலாம்.</p>

<h2>ஒற்றைத் தலைவலியின் கட்டங்கள்</h2>
<p>ஒரு ஒற்றைத் தலைவலி எபிசோட் நான்கு கட்டங்கள் வழியாக முன்னேறலாம்: <strong>prodrome</strong> (மணிக்கணக்கில் முன்பு நுட்பமான மாற்றங்கள்), <strong>aura</strong> (நோயாளிகளில் மூன்றில் ஒரு பங்கில் காட்சி இடையூறுகள்), <strong>தலைவலி கட்டம்</strong>, மற்றும் <strong>postdrome</strong> (சோர்வு மற்றும் மூளைப் புகை உணர்வு).</p>

<h2>பொதுவான தூண்டுதல்கள்</h2>
<ul>
  <li>ஹார்மோன் மாற்றங்கள் (குறிப்பாக பெண்களில்)</li>
  <li>மன அழுத்தம் மற்றும் தவறான தூக்க முறைகள்</li>
  <li>சில உணவுகள் — பழைய சீஸ், காபி, மது</li>
  <li>பிரகாசமான விளக்குகள், சத்தமான சத்தம் அல்லது வலிமையான வாசனைகள்</li>
  <li>நீர்ப்பற்றாக்குறை மற்றும் உணவை தவிர்ப்பது</li>
</ul>

<h2>நோய் கண்டறிதல்</h2>
<p>ஒற்றைத் தலைவலி முதன்மையாக வரலாறு மற்றும் அறிகுறி முறையின் அடிப்படையில் மருத்துவ கண்டறிதலாகும். திடீரென வரும் கடுமையான தலைவலி, நரம்பியல் குறைபாடுகள் அல்லது படிப்படியாக மோசமடையும் தலைவலி போன்ற சிவப்பு கொடிகள் இருக்கும்போது MRI அல்லது CT பரிந்துரைக்கப்படுகிறது.</p>

<h2>சிகிச்சை மற்றும் தடுப்பு</h2>
<p>சிகிச்சையில் கடுமையான நிவாரண மருந்துகள் (triptans, NSAIDs) மற்றும் தடுப்பு சிகிச்சைகள் (beta-blockers, புதிய CGRP inhibitors) அடங்கும். வழக்கமான தூக்கம், நீர்ப்பற்று நிவர்த்தி, மன அழுத்த கட்டுப்பாடு உள்ளிட்ட வாழ்க்கை முறை மேலாண்மையும் சமமாக முக்கியம். JP Neuro Spine Hospital and Pain Management Centre-இல், எங்கள் நரம்பியல் நிபுணர்கள் தனிப்பயனாக்கப்பட்ட ஒற்றைத் தலைவலி மேலாண்மை திட்டம் வழங்குகிறார்கள்.</p>
      `.trim(),
    },
  },

  {
    id: 6,
    slug: 'low-back-ache-causes-and-treatment',
    cover_image_url: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80',
    author: 'JP Neuro Spine Hospital and Pain Management Centre',
    created_at: '2026-04-01T00:00:00.000Z',
    en: {
      title: 'Low Back Ache: Causes, Prevention & When to See a Specialist',
      excerpt:
        'Low back pain is the leading cause of disability worldwide, affecting people of all ages. Most cases are treatable — the key is identifying the underlying cause early.',
      content: `
<h2>How Common is Low Back Pain?</h2>
<p>Low back pain is one of the most prevalent health complaints globally, affecting up to 80% of people at some point in their lives. It is the single leading cause of years lived with disability worldwide. While most episodes resolve within weeks, a significant proportion become chronic and require specialist evaluation.</p>

<h2>Common Causes</h2>
<p>Low back pain arises from a variety of structures — muscles, ligaments, discs, joints, or nerves. Common causes include <strong>muscle or ligament strain</strong> from sudden movements or heavy lifting, <strong>disc problems</strong> (bulge or herniation), <strong>lumbar spondylosis</strong> (age-related joint degeneration), <strong>spinal stenosis</strong> (narrowing of the spinal canal), and <strong>sciatica</strong> (nerve root compression radiating pain to the leg).</p>

<h2>Warning Signs — See a Doctor Promptly</h2>
<ul>
  <li>Pain that radiates down one or both legs</li>
  <li>Numbness or weakness in the legs or feet</li>
  <li>Loss of bladder or bowel control</li>
  <li>Back pain following an injury or fall</li>
  <li>Pain that is severe, constant, or worsening at night</li>
</ul>

<h2>Diagnosis</h2>
<p>Evaluation includes clinical examination and, where needed, imaging — X-ray for bony alignment, MRI for disc and nerve assessment. Blood tests may be ordered to exclude inflammatory or infective causes.</p>

<h2>Treatment</h2>
<p>Acute low back pain is managed with rest, analgesics, and physiotherapy. Chronic or complex cases may require targeted injections, minimally invasive procedures, or surgery. At JP Neuro Spine Hospital and Pain Management Centre, our spine specialists provide a thorough assessment and create a personalised treatment plan — from conservative physiotherapy to advanced surgical solutions — focused on restoring function and quality of life.</p>
      `.trim(),
    },
    ta: {
      title: 'முதுகுவலி: காரணங்கள், தடுப்பு மற்றும் நிபுணரை எப்போது சந்திக்கணும்',
      excerpt:
        'முதுகுவலி உலகளவில் இயலாமைக்கான முக்கிய காரணமாகும், அனைத்து வயதினரையும் பாதிக்கிறது. பெரும்பாலான நிலைகளுக்கு சிகிச்சையளிக்க முடியும் — முக்கிய விஷயம் ஆரம்பத்திலேயே அடிப்படை காரணத்தை கண்டறிவது.',
      content: `
<h2>முதுகுவலி எவ்வளவு பொதுவானது?</h2>
<p>முதுகுவலி உலகளவில் மிகவும் பரவலான உடல்நல புகார்களில் ஒன்றாகும், தங்கள் வாழ்நாளில் ஒரு கட்டத்தில் 80% வரை மக்களை பாதிக்கிறது. இது உலகளவில் இயலாமையுடன் வாழும் ஆண்டுகளுக்கான ஒற்றை முக்கிய காரணமாகும். பெரும்பாலான எபிசோட்கள் வாரங்களுக்குள் சரியாகும், ஆனால் கணிசமான விகிதம் நாள்பட்டதாகி நிபுணர் மதிப்பீடு தேவைப்படுகிறது.</p>

<h2>பொதுவான காரணங்கள்</h2>
<p>முதுகுவலி தசைகள், திண்டுகள், டிஸ்க்குகள், மூட்டுகள் அல்லது நரம்புகள் உட்பட பல்வேறு அமைப்புகளிலிருந்து எழுகிறது. பொதுவான காரணங்கள்: <strong>தசை அல்லது திண்டு நெகிழ்வு</strong>, <strong>டிஸ்க் பிரச்சினைகள்</strong> (பல்ஜ் அல்லது ஹெர்னியேஷன்), <strong>lumbar spondylosis</strong> (வயது தொடர்பான மூட்டு சிதைவு), <strong>spinal stenosis</strong> (முதுகெலும்பு கால்வாய் குறுகல்), மற்றும் <strong>sciatica</strong> (நரம்பு வேர் சுருக்கம்).</p>

<h2>எச்சரிக்கை அறிகுறிகள் — விரைவில் மருத்துவரை அணுகுங்கள்</h2>
<ul>
  <li>ஒன்று அல்லது இரண்டு கால்களிலும் பரவும் வலி</li>
  <li>கால்கள் அல்லது கால் விரல்களில் உணர்வின்மை அல்லது பலவீனம்</li>
  <li>சிறுநீர்ப்பை அல்லது குடல் கட்டுப்பாட்டை இழப்பு</li>
  <li>காயம் அல்லது விழுந்த பிறகு முதுகுவலி</li>
  <li>இரவில் கடுமையான, தொடர்ச்சியான அல்லது மோசமடையும் வலி</li>
</ul>

<h2>நோய் கண்டறிதல்</h2>
<p>மதிப்பீட்டில் மருத்துவ பரிசோதனை மற்றும் தேவைப்படும் இடங்களில் X-ray மற்றும் MRI அடங்கும். வீக்கம் அல்லது தொற்று காரணங்களை விலக்க இரத்த பரிசோதனைகள் செய்யப்படலாம்.</p>

<h2>சிகிச்சை</h2>
<p>கடுமையான முதுகுவலியை ஓய்வு, வலி நிவாரணிகள் மற்றும் இயல்நிலை சிகிச்சை மூலம் கட்டுப்படுத்தலாம். நாள்பட்ட அல்லது சிக்கலான நிலைகளுக்கு இலக்கு ஊசிகள், குறைவான ஊடுருவல் நடைமுறைகள் அல்லது அறுவை சிகிச்சை தேவைப்படலாம். JP Neuro Spine Hospital and Pain Management Centre-இல், எங்கள் முதுகெலும்பு நிபுணர்கள் விரிவான மதிப்பீடு மற்றும் தனிப்பயனாக்கப்பட்ட சிகிச்சை திட்டம் வழங்குகிறார்கள்.</p>
      `.trim(),
    },
  },

  {
    id: 7,
    slug: 'neck-pain-causes-and-relief',
 cover_image_url: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1200&q=80',
    author: 'JP Neuro Spine Hospital and Pain Management Centre',
    created_at: '2026-04-08T00:00:00.000Z',
    en: {
      title: 'Neck Pain: Causes, Red Flags & Effective Relief',
      excerpt:
        'Neck pain is extremely common and ranges from short-lived muscle stiffness to symptoms that signal a serious spinal condition. Knowing when to seek care makes all the difference.',
      content: `
<h2>Why Neck Pain is So Common</h2>
<p>The cervical spine — the seven vertebrae that form the neck — supports the full weight of the head while allowing a remarkable range of movement. This combination of load and mobility makes the neck vulnerable to strain, degeneration, and injury. Neck pain affects people of all ages and is increasingly common due to prolonged screen use and poor ergonomics.</p>

<h2>Common Causes</h2>
<p><strong>Muscle strain and poor posture</strong> are the most frequent causes, especially in people who spend long hours at desks or looking at screens. <strong>Cervical spondylosis</strong> (wear and tear of the cervical discs and joints) is the most common cause in older adults. <strong>Cervical disc herniation</strong> can compress nerves causing arm pain and tingling. Less commonly, neck pain may result from inflammatory arthritis, infection, or tumour.</p>

<h2>Red Flag Symptoms — Seek Urgent Care</h2>
<ul>
  <li>Neck pain following trauma (fall, accident)</li>
  <li>Pain radiating into the arms with numbness or weakness</li>
  <li>Loss of coordination or difficulty walking</li>
  <li>Bladder or bowel dysfunction</li>
  <li>Severe headache starting suddenly with neck stiffness</li>
</ul>

<h2>Diagnosis</h2>
<p>Clinical assessment is supplemented by X-ray, MRI, or CT depending on the suspected cause. MRI is preferred for soft tissue and nerve evaluation, while CT is better for bony detail.</p>

<h2>Treatment</h2>
<p>Mild to moderate neck pain often resolves with physiotherapy, analgesics, and postural correction. Heat or cold therapy and cervical exercises can provide relief. Persistent or nerve-related pain may benefit from epidural injections or surgical decompression. At JP Neuro Spine Hospital and Pain Management Centre, our specialists diagnose the root cause and offer the most appropriate and effective treatment, helping patients return to a pain-free, active life.</p>
      `.trim(),
    },
    ta: {
      title: 'கழுத்து வலி: காரணங்கள், எச்சரிக்கை அறிகுறிகள் மற்றும் நிவாரணம்',
      excerpt:
        'கழுத்து வலி மிகவும் பொதுவானது மற்றும் குறுகிய கால தசை விறைப்பிலிருந்து தீவிர முதுகெலும்பு நிலையை சுட்டும் அறிகுறிகள் வரை வேறுபடுகிறது. எப்போது சிகிச்சை நாட வேண்டும் என்று தெரிந்திருப்பது முக்கியம்.',
      content: `
<h2>கழுத்து வலி ஏன் மிகவும் பொதுவானது?</h2>
<p>கழுத்து எலும்புகள் — கழுத்தை உருவாக்கும் ஏழு முதுகெலும்புகள் — தலையின் முழு எடையை தாங்கி ஒரு குறிப்பிடத்தக்க அசைவு வீச்சை அனுமதிக்கின்றன. இந்த சுமை மற்றும் இயக்கத்தின் கலவை கழுத்தை நெகிழ்வு, சிதைவு மற்றும் காயத்திற்கு பாதிப்படையச் செய்கிறது. நீண்ட நேர திரை பயன்பாடு மற்றும் தவறான கருவியியல் காரணமாக கழுத்து வலி அதிகரித்து வருகிறது.</p>

<h2>பொதுவான காரணங்கள்</h2>
<p><strong>தசை நெகிழ்வு மற்றும் தவறான தோரணை</strong> மிகவும் அடிக்கடி வரும் காரணங்கள், குறிப்பாக மேசையில் நீண்ட நேரம் இருப்பவர்களில். <strong>Cervical spondylosis</strong> (கழுத்து டிஸ்க்குகள் மற்றும் மூட்டுகளின் தேய்மானம்) வயதானவர்களில் மிகவும் பொதுவான காரணமாகும். <strong>கழுத்து டிஸ்க் ஹெர்னியேஷன்</strong> நரம்புகளை அழுத்தி கை வலி மற்றும் கூச்சத்தை ஏற்படுத்தலாம்.</p>

<h2>எச்சரிக்கை அறிகுறிகள் — அவசர சிகிச்சை நாடுங்கள்</h2>
<ul>
  <li>அதிர்ச்சிக்கு (விழுவது, விபத்து) பிறகு கழுத்து வலி</li>
  <li>கைகளில் உணர்வின்மை அல்லது பலவீனத்துடன் பரவும் வலி</li>
  <li>ஒருங்கிணைப்பு இழப்பு அல்லது நடக்க சிரமம்</li>
  <li>சிறுநீர்ப்பை அல்லது குடல் செயலிழப்பு</li>
  <li>கழுத்து விறைப்புடன் திடீரென தொடங்கும் கடுமையான தலைவலி</li>
</ul>

<h2>நோய் கண்டறிதல்</h2>
<p>சந்தேகிக்கப்படும் காரணத்தைப் பொறுத்து மருத்துவ மதிப்பீட்டை X-ray, MRI அல்லது CT மூலம் கூடுதலாக்குகிறோம். மென்திசு மற்றும் நரம்பு மதிப்பீட்டிற்கு MRI விரும்பப்படுகிறது, அதே நேரம் CT எலும்பு விவரங்களுக்கு சிறந்தது.</p>

<h2>சிகிச்சை</h2>
<p>லேசான முதல் மிதமான கழுத்து வலி பெரும்பாலும் இயல்நிலை சிகிச்சை, வலி நிவாரணிகள் மற்றும் தோரணை திருத்தத்துடன் சரியாகும். வெப்பம் அல்லது குளிர் சிகிச்சை மற்றும் கழுத்து பயிற்சிகள் நிவாரணம் வழங்கலாம். தொடர்ந்து இருக்கும் அல்லது நரம்பு தொடர்பான வலிக்கு epidural ஊசிகள் அல்லது அறுவை சிகிச்சை நிவாரணம் தேவைப்படலாம். JP Neuro Spine Hospital and Pain Management Centre-இல், எங்கள் நிபுணர்கள் வேர் காரணத்தை கண்டறிந்து மிகவும் பொருத்தமான சிகிச்சையை வழங்கி, நோயாளிகளை வலியற்ற, சுறுசுறுப்பான வாழ்க்கைக்கு திரும்பவைக்கிறார்கள்.</p>
      `.trim(),
    },
  },
];

/**
 * Returns blogs flattened for the given language.
 * Shape matches what BlogListing and BlogDetail expect.
 */
export function getBlogsForLang(lang = 'en') {
  const l = lang === 'ta' ? 'ta' : 'en';
  return staticBlogsData.map((b) => ({
    id: b.id,
    slug: b.slug,
    cover_image_url: b.cover_image_url,
    author: b.author,
    created_at: b.created_at,
    title: b[l].title,
    excerpt: b[l].excerpt,
    content: b[l].content,
  }));
}

/**
 * Returns a single blog by slug for the given language, or null if not found.
 */
export function getBlogBySlug(slug, lang = 'en') {
  const all = getBlogsForLang(lang);
  return all.find((b) => b.slug === slug) || null;
}
