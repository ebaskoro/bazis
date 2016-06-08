<?php

/* Default/agent.html.twig */
class __TwigTemplate_35f036fc29b62175e53814cb5361c791723e461517d23e94a24a3c61473b027c extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html>
<head>
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">
  <title>IMCV BAZIS Agent</title>
  <link rel=\"stylesheet\" type=\"text/css\" href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css\" />
  <link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=Open+Sans:600\" />
  ";
        // line 8
        if (isset($context['assetic']['debug']) && $context['assetic']['debug']) {
            // asset "4fe151e_0"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_4fe151e_0") : $this->env->getExtension('assets')->getAssetUrl("_controller/css/4fe151e_part_1_common_1.css");
            // line 9
            echo "    <link rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, (isset($context["asset_url"]) ? $context["asset_url"] : $this->getContext($context, "asset_url")), "html", null, true);
            echo "\" />
  ";
        } else {
            // asset "4fe151e"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_4fe151e") : $this->env->getExtension('assets')->getAssetUrl("_controller/css/4fe151e.css");
            echo "    <link rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, (isset($context["asset_url"]) ? $context["asset_url"] : $this->getContext($context, "asset_url")), "html", null, true);
            echo "\" />
  ";
        }
        unset($context["asset_url"]);
        // line 11
        echo "  <link rel=\"icon\" type=\"image/x-icon\" href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("favicon.ico"), "html", null, true);
        echo "\" />
</head>
<body>
  <nav class=\"navbar navbar-inverse navbar-fixed-top\">
    <div class=\"container\">
      <form class=\"navbar-form\">
        <div class=\"input-group\">
          <span class=\"input-group-addon\">Agen BAZIS</span>
          <select class=\"form-control\" id=\"agent\">
            <option value=\"\">Pilih</option>
            <option value=\"Adi\">Adi</option>
            <option value=\"Nur Edi\">Nur Edi</option>
            <option value=\"Teddy\">Teddy</option>
            <option value=\"Toro\">Toro</option>
          </select>
        </div>
      </form>
    </div>
  </nav>
  
  <div class=\"container\">
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-6 col-md-6\">
        <div class=\"form-group\">
          <h4>Zakat Fitrah</h4>
          <h6>\$12 per Jiwa</h6>
          <select class=\"form-control input-lg\" id=\"fitrah\">
            <option value=\"0\">Tidak Ada</option>
            <option value=\"1\">1 Orang</option>
            <option value=\"2\">2 Orang</option>
            <option value=\"3\">3 Orang</option>
            <option value=\"4\">4 Orang</option>
            <option value=\"5\">5 Orang</option>
            <option value=\"6\">6 Orang</option>
            <option value=\"7\">7 Orang</option>
            <option value=\"8\">8 Orang</option>
            <option value=\"9\">9 Orang</option>
            <option value=\"10\">10 Orang</option>
          </select>
        </div>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-6 col-md-6\">
        <div class=\"form-group\">
          <h4>Fidyah</h4>
          <h6>\$12 per Hari</h6>
          <select class=\"form-control input-lg\" id=\"fidyah\">
            <option value=\"0\">Tidak Ada</option>
            <option value=\"1\">1 Hari</option>
            <option value=\"2\">2 Hari</option>
            <option value=\"3\">3 Hari</option>
            <option value=\"4\">4 Hari</option>
            <option value=\"5\">5 Hari</option>
            <option value=\"6\">6 Hari</option>
            <option value=\"7\">7 Hari</option>
            <option value=\"8\">8 Hari</option>
            <option value=\"9\">9 Hari</option>
            <option value=\"10\">10 Hari</option>
            <option value=\"11\">11 Hari</option>
            <option value=\"12\">12 Hari</option>
            <option value=\"13\">13 Hari</option>
            <option value=\"14\">14 Hari</option>
            <option value=\"15\">15 Hari</option>
            <option value=\"16\">16 Hari</option>
            <option value=\"17\">17 Hari</option>
            <option value=\"18\">18 Hari</option>
            <option value=\"19\">19 Hari</option>
            <option value=\"20\">20 Hari</option>
            <option value=\"21\">21 Hari</option>
            <option value=\"22\">22 Hari</option>
            <option value=\"23\">23 Hari</option>
            <option value=\"24\">24 Hari</option>
            <option value=\"25\">25 Hari</option>
            <option value=\"26\">26 Hari</option>
            <option value=\"27\">27 Hari</option>
            <option value=\"28\">28 Hari</option>
            <option value=\"29\">29 Hari</option>
            <option value=\"30\">30 Hari</option>
          </select>
        </div>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-6 col-md-6\">
        <div class=\"form-group\">
          <h4>Zakat Maal</h4>
          <h6>2.5% dari total harta kita (uang kas, emas, perak dan pendapatan bisnis)</h6>
          <input type=\"text\" class=\"form-control input-lg\" id=\"maal\" />
        </div>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-6 col-md-6\">
        <div class=\"form-group\">
          <h4>Infak atau Sodaqoh</h4>
          <input type=\"text\" class=\"form-control input-lg\" id=\"infak\" />
        </div>
      </div>
    </div>
    <div class=\"row\" id=\"summary\">
      <div class=\"col-xs-12 col-sm-12 col-md-12\">
        <h4>Summary</h4>
        <table class=\"table table-bordered\">
          <tr id=\"fitrahRow\">
            <td>Zakat Fitrah:</td>
            <td class=\"text-center\">\$12</td>
            <td class=\"text-center\">x</td>
            <td class=\"quantity text-center\"></td>
            <td class=\"text-center\">=</td>
            <td class=\"total text-right\"></td>
          </tr>
          <tr id=\"fidyahRow\">
            <td>Fidyah:</td>
            <td class=\"text-center\">\$12</td>
            <td class=\"text-center\">x</td>
            <td class=\"quantity text-center\"></td>
            <td class=\"text-center\">=</td>
            <td class=\"total text-right\"></td>
          </tr>
          <tr id=\"maalRow\">
            <td colspan=\"5\">Zakat Maal:</td>
            <td class=\"total text-right\"></td>
          </tr>
          <tr id=\"infakRow\">
            <td colspan=\"5\">Infak / Sodaqoh:</td>
            <td class=\"total text-right\"></td>
          </tr>
          <tr>
            <td colspan=\"5\">
              <h3>Total Pembayaran:</h3>
            </td>
            <td class=\"text-right\">
              <h3 class=\"total\"></h3>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-7 col-md-7\">
        <div class=\"form-group\">
          <h4>Nama Lengkap <span class=\"glyphicon glyphicon-asterisk text-danger\"></span></h4>
          <input type=\"text\" class=\"form-control input-lg\" id=\"name\" />
        </div>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-5 col-md-5\">
        <div class=\"form-group\">
          <h4>Nomor Telefon <span class=\"glyphicon glyphicon-asterisk text-danger\"></span></h4>
          <input type=\"text\" class=\"form-control input-lg\" id=\"mobile\" />
        </div>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-7 col-md-7\">
        <div class=\"form-group\">
          <h4>Alamat Email</h4>
          <input type=\"email\" class=\"form-control input-lg\" id=\"email\" />
        </div>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-12 col-sm-4 col-md-4\">
        <div class=\"form-group\">
          <h4>Metode Pembayaran</h4>
          <select class=\"form-control input-lg\" id=\"paymentMethod\">
            <option>Cash</option>
            <option>EFTPos</option>
            <option>Transfer</option>
          </select>
        </div>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-xs-6 col-sm-offset-3 col-sm-3 col-md-offset-3 col-md-3\">
        <button class=\"btn btn-default btn-block btn-lg\" id=\"resetButton\">Delete</button>
      </div>
      <div class=\"col-xs-6 col-sm-3 col-md-3\">
        <button class=\"btn btn-primary btn-block btn-lg\" id=\"processButton\">Save</button>
      </div>
    </div>
  </div>
  
  <nav class=\"navbar navbar-inverse navbar-fixed-bottom\">
    <div class=\"container\">
      <p class=\"navbar-text\">&copy; 2015 IMCV BAZIS | bazis.imcv.org.au</p>
    </div>
  </nav>
  
  <!-- Validation errors modal dialog -->
  <div class=\"modal fade\" id=\"validationModal\">
    <div class=\"modal-dialog\">
      <div class=\"modal-content\">
        <div class=\"modal-header\">
          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">
            <span aria-hidden=\"true\">&times;</span>
          </button>
          <h4 class=\"modal-title\">Maaf!</h4>
        </div>
        <div class=\"modal-body\">
          <p class=\"error-message\"></p>
        </div>
        <div class=\"modal-footer\">
          <button type=\"button\" class=\"btn btn-primary btn-block btn-lg\" data-dismiss=\"modal\">OK</button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Progress modal dialog -->
  <div class=\"modal fade\" id=\"progressModal\">
    <div class=\"modal-dialog\">
      <div class=\"modal-content\">
        <div class=\"modal-header\">
          <h3 class=\"modal-title\">Processing...</h3>
        </div>
        <div class=\"modal-body\">
          <div class=\"progress\">
            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" style=\"width: 100%\"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Confirmation modal dialog -->
  <div class=\"modal fade\" id=\"successModal\">
    <div class=\"modal-dialog\">
      <div class=\"modal-content\">
        <div class=\"modal-header\">
          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">
            <span aria-hidden=\"true\">&times;</span>
          </button>
          <h4 class=\"modal-title\">Done!</h4>
        </div>
        <div class=\"modal-body\">
          <p>Jazakumullah, <span class=\"name\"></span></ap>
          <p>Anda telah tercatat dalam pembayaran Zakat melalui IMCV BAZIS. Berikut ini adalah rincian pembayaran anda.</p>
          <table></table>
          <div class=\"transfer-info\">
            <p>Mohon untuk melakukan transfer pembayaran anda ke rekening Bazis IMCV dengan rincian di bawah ini.</p>
            <p>Account Name: IMCV Inc. BAZIS</p>
            <p>BSB: 083144</p>
            <p>Account Number: 944280572</p>
            <p>Description: <strong class=\"reference\"></strong></p>
            <p>Amount: <strong class=\"total\"></strong></p>
          </div>
        </div>
        <div class=\"modal-footer\">
          <button type=\"button\" class=\"btn btn-primary btn-block btn-lg\" data-dismiss=\"modal\">OK</button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Vendor -->
  <script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\"></script>
  <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js\"></script>
  
  ";
        // line 272
        if (isset($context['assetic']['debug']) && $context['assetic']['debug']) {
            // asset "943731b_0"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_943731b_0") : $this->env->getExtension('assets')->getAssetUrl("_controller/js/943731b_agent_1.js");
            // line 273
            echo "    <script src=\"";
            echo twig_escape_filter($this->env, (isset($context["asset_url"]) ? $context["asset_url"] : $this->getContext($context, "asset_url")), "html", null, true);
            echo "\"></script>
  ";
        } else {
            // asset "943731b"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_943731b") : $this->env->getExtension('assets')->getAssetUrl("_controller/js/943731b.js");
            echo "    <script src=\"";
            echo twig_escape_filter($this->env, (isset($context["asset_url"]) ? $context["asset_url"] : $this->getContext($context, "asset_url")), "html", null, true);
            echo "\"></script>
  ";
        }
        unset($context["asset_url"]);
        // line 275
        echo "</body>
</html>";
    }

    public function getTemplateName()
    {
        return "Default/agent.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  329 => 275,  315 => 273,  311 => 272,  46 => 11,  32 => 9,  28 => 8,  19 => 1,);
    }
}
