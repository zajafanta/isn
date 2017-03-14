String FILE = "questions.txt";
String questions[];


void setup() {
  questions = loadStrings(FILE);
  JSONArray values = new JSONArray();
  for (int i = 0; i < questions.length; i++) {
    String phrase = questions[i];
    String[] questionPropre = phrase.split("[;]");

    values.setJSONObject(i, creerJSONObject(questionPropre));
  }
  saveJSONArray(values, "questions.json");
}
JSONObject creerJSONObject(String[]w) {
  JSONObject question = new JSONObject();
  question.setInt("id", Integer.parseInt(w[0]));
  question.setString("contenuQuestion", w[1]);
  question.setInt("themeQuestion", Integer.parseInt(w[2]));
  return question;
}

