import React, { Component } from "react";





class Main extends Component {
  render() {
    return (
      <div>
        <main>
          <div className="content">
            <h1>Chat avec le vérificateur de code intelligent</h1>
            <p>
              Obtenez des commentaires instantanés sur votre code et améliorez vos compétences en programmation
            </p>
            <button>Vérifiez votre code</button>
          </div>
          <div class="image">
            <img src="/images/sos_code.jpeg" alt="Code Image" />
          </div>
        </main>
        
        <header1>
          <h1>Vérificateur de code</h1>
        </header1>
        
        <main1>
          <div class="search-container">
            <textarea 
              placeholder="Insérer votre code" 
              cols={100} 
              rows={10} 
            />
          </div>
          <div className="code-container">
            <div className="code-block">
              <div className="code-details">
                <span className="label">Extrait de code</span>
                <pre>
                  function ajouter(a, b) {"{"}
                    return a + b;
                  {"}"}
                </pre>
              </div>
              <div className="code-info">
                <span className="label">Langue</span>
                <span>Javascript</span>
              </div>
              <div className="code-result">
                <span className="label">Vérifier le résultat</span>
                <span>Passer</span>
              </div>
            </div>
            
            <div className="code-block">
              <div className="code-details">
                <span className="label">Extrait de code</span>
                <pre>
                  public class Main {"{"}
                    public static void main(String[] args) {"{"}
                      System.out.println("Bonjour le monde !");
                    {"}"}
                  {"}"}
                </pre>
              </div>
              <div className="code-info">
                <span className="label">Langue</span>
                <span>Java</span>
              </div>
              <div className="code-result">
                <span className="label">Vérifier le résultat</span>
                <span>Passer</span>
              </div>
            </div>
            
            <div className="code-block">
              <div className="code-details">
                <span className="label">Extrait de code</span>
                <pre>
                  $sql = "SELECT * FROM utilisateurs";
                  $result = mysqli_query($conn, $sql);
                </pre>
              </div>
              <div className="code-info">
                <span className="label">Langue</span>
                <span>PHP</span>
              </div>
              <div className="code-result">
                <span className="label">Vérifier le résultat</span>
                <span>Échouer</span>
              </div>
            </div>
          </div>
        </main1>
      </div>
    );
  }
}

export default Main;
