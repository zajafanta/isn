String FILE = "reponses.txt";
String reponses[];


void setup() {
  reponses = loadStrings(FILE);
  JSONArray values = new JSONArray();
  for (int i = 0; i < reponses.length; i++) {
    String phrase = reponses[i];
    String[] reponseSerialisee = phrase.split("[;]");
    
    values.setJSONObject(i, creerJSONObject(reponseSerialisee));
  }
  saveJSONArray(values, "reponses.json");
}
JSONObject creerJSONObject(String[]w) {
  JSONObject reponse = new JSONObject();
  reponse.setInt("id", Integer.parseInt(w[0]));
  reponse.setString("contenuReponse", w[1]);
  reponse.setInt("iduestionAssociee", Integer.parseInt(w[2]));
  reponse.setBoolean("veracite", Boolean.parseBoolean(w[3]));
  return reponse;
}
